import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, MapPin, Users, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { eventService } from '@/services/events';
import { formatDate } from '@/utils/formatDate';
import { Button } from '@/components/ui/button';

interface EventPageProps {
  params: Promise<{ id: string }>;
}

export default async function EventDetailsPage({ params }: EventPageProps) {
  const { id } = await params;
  const event = await eventService.getById(id).catch(() => null);

  if (!event) {
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
            {event.bannerImage?.url ? (
              <Image
                src={event.bannerImage.url}
                alt={event.name}
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
              {event.name}
            </h1>
            <p className="text-lg leading-relaxed whitespace-pre-wrap text-[#BEBEBE]">
              {event.description}
            </p>
          </div>
        </div>

        {/* Coluna Lateral (Infos & Inscrição) */}
        <aside className="space-y-6">
          <div className="sticky top-24 rounded-xl border border-[#454545] bg-[#2E2E2E] p-6">
            <h2 className="mb-6 border-b border-[#454545] pb-2 text-xl font-bold tracking-wider text-[#FF7E05] uppercase">
              Detalhes
            </h2>

            <div className="mb-8 space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="shrink-0 text-[#FF7E05]" size={20} />
                <div>
                  <p className="text-xs text-[#BEBEBE]/50 uppercase">
                    Data do Evento
                  </p>
                  <p className="font-medium text-[#BEBEBE]">
                    {formatDate(event.date)}
                  </p>
                </div>
              </div>

              {/* Exemplo de Local - Ajuste conforme seu schema */}
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
                    {event._count?.registrations ?? 0} pessoas confirmadas
                  </p>
                </div>
              </div>
            </div>

            {/* Placeholder para o Form de Inscrição que faremos no próximo passo */}
            <Button className="h-12 w-full">Quero me inscrever</Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
