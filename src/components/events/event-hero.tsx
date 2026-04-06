import Image from 'next/image';
import { Event } from '@/types';

interface EventHeroProps {
  event: Event;
}

export function EventHero({ event }: EventHeroProps) {
  return (
    <div className="space-y-6">
      {/* Container da Imagem */}
      <div className="relative h-100 w-full overflow-hidden rounded-xl border border-[#454545] bg-[#2E2E2E] shadow-2xl">
        {event.bannerImage?.url ? (
          <Image
            src={event.bannerImage.url}
            alt={event.name}
            fill
            className="object-cover opacity-90 transition-opacity hover:opacity-100"
            priority
          />
        ) : (
          <div className="flex h-full items-center justify-center font-bold tracking-widest text-[#454545]">
            SEM IMAGEM DE CAPA
          </div>
        )}
      </div>

      {/* Títulos */}
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-[#FF7E05] uppercase md:text-5xl">
          {event.name}
        </h1>
        <p className="text-lg leading-relaxed whitespace-pre-wrap text-[#BEBEBE]">
          {event.description}
        </p>
      </div>
    </div>
  );
}
