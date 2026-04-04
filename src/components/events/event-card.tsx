import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Users } from 'lucide-react';
import { EventWithDetails } from '@/services/events';
import { formatDate } from '@/utils/formatDate';
import { Button } from '@/components/ui/button';

interface EventCardProps {
  event: EventWithDetails;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-[#454545] bg-[#2E2E2E] transition-all hover:border-[#FF7E05]/50">
      {/* Banner do Evento */}
      <div className="relative h-48 w-full overflow-hidden bg-[#212121]">
        {event.bannerImage?.url ? (
          <Image
            src={event.bannerImage.url}
            alt={event.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-[#454545]">
            <span className="text-xs font-bold tracking-widest uppercase">
              Sem Imagem
            </span>
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col gap-4 p-5">
        <div>
          <h3 className="mb-2 line-clamp-1 text-lg leading-tight font-bold text-[#FF7E05]">
            {event.name}
          </h3>
          <p className="line-clamp-2 min-h-10 text-sm text-[#BEBEBE]">
            {event.description}
          </p>
        </div>

        {/* Info Bars */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-xs text-[#BEBEBE]/70">
            <Calendar size={14} className="text-[#FF7E05]" />
            <span>{formatDate(event.date)}</span>
          </div>

          {event._count && (
            <div className="flex items-center gap-2 text-xs text-[#BEBEBE]/70">
              <Users size={14} className="text-[#FF7E05]" />
              <span>{event._count.registrations} Inscritos</span>
            </div>
          )}
        </div>

        {/* Action */}
        <Link href={`/events/${event.id}`} className="mt-2">
          <Button variant="outline" className="w-full py-1.5 text-xs">
            Ver Detalhes
          </Button>
        </Link>
      </div>
    </article>
  );
}
