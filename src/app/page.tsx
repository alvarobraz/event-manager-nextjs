import { getHomeData } from '@/api/get-home-data';
import { EventCard } from '@/components/events/event-card';
import { HomeProps } from '@/types';

export default async function Home({ searchParams }: HomeProps) {
  const { q } = await searchParams;

  const { events, query } = await getHomeData({ q });

  return (
    <div className="py-8">
      {q && (
        <p className="mb-4 text-xs tracking-widest text-[#BEBEBE]/40 uppercase">
          Resultados para: <span className="text-[#FF7E05]">{q}</span>
        </p>
      )}
      {/* Cabeçalho da Seção */}
      <div className="mb-10 flex flex-col gap-2 border-l-4 border-[#FF7E05] pl-6">
        <h1 className="text-3xl font-bold tracking-tight text-[#FF7E05] uppercase">
          {q ? 'Eventos Encontrados' : 'Próximos Eventos'}
        </h1>
        <p className="text-sm text-[#BEBEBE]/60">
          Explore e participe dos melhores eventos de tecnologia e inovação.
        </p>
      </div>

      {/* Grid de Eventos */}
      {events.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#454545] bg-[#2E2E2E]/30 py-20">
          <p className="font-medium text-[#BEBEBE]">
            {query
              ? `Nenhum evento para "${query}"`
              : 'Nenhum evento encontrado no momento.'}
          </p>
          <span className="mt-1 text-xs text-[#BEBEBE]/50">
            Tente novamente mais tarde ou crie um novo evento.
          </span>
        </div>
      )}
    </div>
  );
}
