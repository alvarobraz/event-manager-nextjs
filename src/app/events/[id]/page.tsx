import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

import { RegistrationForm } from '@/components/events/registration-form';
import { ParticipantsTable } from '@/components/events/participants-table';
import { Pagination } from '@/components/ui/pagination';
import { EventHero } from '@/components/events/event-hero';
import { EventInfoSidebar } from '@/components/events/event-info-sidebar';
import { getEventPageData } from '@/api/get-event-page-data';
import { EventPageProps } from '@/types';

export default async function EventDetailsPage({
  params,
  searchParams,
}: EventPageProps) {
  const { id } = await params;
  const { page } = await searchParams;

  const { event, participants, totalCount, currentPage, hasNextPage } =
    await getEventPageData({ id, page });

  return (
    <div className="animate-in fade-in py-8 duration-500">
      <Link
        href="/"
        className="group mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#BEBEBE] transition-colors hover:text-[#FF7E05]"
      >
        <ArrowLeft
          size={16}
          className="transition-transform group-hover:-translate-x-1"
        />
        Voltar para a listagem
      </Link>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <EventHero event={event} />

          <section className="border-t border-[#454545] pt-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-[#BEBEBE] uppercase">
                Quem vai participar
              </h2>
              <span className="rounded-full bg-[#454545] px-3 py-1 text-xs font-bold text-[#FF7E05]">
                {totalCount} TOTAL
              </span>
            </div>

            <ParticipantsTable participants={participants} />

            <Pagination
              currentPage={currentPage}
              hasNextPage={hasNextPage}
              baseUrl={`/events/${id}`}
            />
          </section>
        </div>

        <aside className="h-fit space-y-6 lg:sticky lg:top-8">
          <EventInfoSidebar event={event} totalCount={totalCount} />

          <div className="rounded-xl border border-[#454545] bg-[#2E2E2E] p-6 shadow-sm">
            <h2 className="mb-6 border-b border-[#454545] pb-2 text-xl font-bold tracking-wider text-[#FF7E05] uppercase">
              Inscrição
            </h2>
            <RegistrationForm eventId={id} />
            <p className="mt-4 text-center text-[10px] font-bold tracking-widest text-[#BEBEBE]/40 uppercase">
              Vagas limitadas
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
