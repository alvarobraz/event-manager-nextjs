import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, MapPin, Users, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { eventService } from '@/services/events';
import { formatDate } from '@/utils/formatDate';
import { RegistrationForm } from '@/components/events/registration-form';
import { ParticipantsTable } from '@/components/events/participants-table';

interface EventPageProps {
  params: Promise<{ id: string }>;
}

export default async function EventDetailsPage({ params }: EventPageProps) {
  const { id } = await params;
  const data = await eventService.getById(id).catch(() => null);

  if (!data?.event) {
    notFound();
  }

  return (
    <div className="animate-in fade-in py-8 duration-500">
      {/* Botão Voltar */}
      <Link
        href="/"
        className="group mb-6 flex items-center gap-2 text-sm font-medium text-[#BEBEBE] transition-colors hover:text-[#FF7E05]"
      >
        <ArrowLeft
          size={16}
          className="transition-transform group-hover:-translate-x-1"
        />
        Voltar para a listagem
      </Link>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Coluna Principal (Conteúdo) */}
        <div className="space-y-6 lg:col-span-2">
          <div className="relative h-100 w-full overflow-hidden rounded-xl border border-[#454545] bg-[#2E2E2E]">
            {data?.event.bannerImage?.url ? (
              <Image
                src={data?.event.bannerImage.url}
                alt={data?.event.name}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex h-full items-center justify-center font-bold text-[#454545]">
                SEM IMAGEM
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-[#FF7E05] uppercase">
              {data?.event.name}
            </h1>
            <p className="text-lg leading-relaxed whitespace-pre-wrap text-[#BEBEBE]">
              {data?.event.description}
            </p>
          </div>

          <section className="border-t border-[#454545] pt-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-[#BEBEBE] uppercase">
                Quem vai participar
              </h2>
              <span className="rounded-full bg-[#454545] px-3 py-1 text-xs font-bold text-[#FF7E05]">
                {data.participants.length} TOTAL
              </span>
            </div>

            <ParticipantsTable participants={data.participants} />
          </section>
        </div>

        {/* Coluna Lateral (Infos & Inscrição) */}
        <aside className="h-fit space-y-6 lg:sticky lg:top-8">
          {/* Card 1: Detalhes Rápidos */}
          <div className="rounded-xl border border-[#454545] bg-[#2E2E2E] p-6">
            <h2 className="mb-6 border-b border-[#454545] pb-2 text-xl font-bold tracking-wider text-[#FF7E05] uppercase">
              Detalhes
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="shrink-0 text-[#FF7E05]" size={20} />
                <div>
                  <p className="text-xs text-[#BEBEBE]/50 uppercase">
                    Data do Evento
                  </p>
                  <p
                    className="font-medium text-[#BEBEBE]"
                    suppressHydrationWarning
                  >
                    {formatDate(data?.event.date ?? '')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="shrink-0 text-[#FF7E05]" size={20} />
                <div>
                  <p className="text-xs text-[#BEBEBE]/50 uppercase">
                    Localização
                  </p>
                  <p className="font-medium text-[#BEBEBE]">
                    Online / Presencial
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="shrink-0 text-[#FF7E05]" size={20} />
                <div>
                  <p className="text-xs text-[#BEBEBE]/50 uppercase">
                    Inscritos
                  </p>
                  <p className="font-medium text-[#BEBEBE]">
                    {data?.participants.length === 1
                      ? '1 pessoa confirmada'
                      : `${data?.participants.length ?? 0} pessoas confirmadas`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Formulário de Inscrição */}
          <div className="rounded-xl border border-[#454545] bg-[#2E2E2E] p-6">
            <h2 className="mb-6 border-b border-[#454545] pb-2 text-xl font-bold tracking-wider text-[#FF7E05] uppercase">
              Inscrição
            </h2>

            {/* Chamada do seu componente de formulário */}
            <RegistrationForm eventId={id} />

            <p className="mt-4 text-center text-[10px] tracking-widest text-[#BEBEBE]/40 uppercase">
              Vagas limitadas
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
