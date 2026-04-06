import { Calendar, MapPin, Users } from 'lucide-react';
import { formatDate } from '@/utils/formatDate';
import { Event } from '@/types';

interface EventInfoSidebarProps {
  event: Event;
  totalCount: number;
}

export function EventInfoSidebar({ event, totalCount }: EventInfoSidebarProps) {
  const details = [
    {
      icon: <Calendar className="shrink-0 text-[#FF7E05]" size={20} />,
      label: 'Data do Evento',
      value: formatDate(event.date ?? ''),
      hydrate: true,
    },
    {
      icon: <MapPin className="shrink-0 text-[#FF7E05]" size={20} />,
      label: 'Localização',
      value: 'Online / Presencial',
    },
    {
      icon: <Users className="shrink-0 text-[#FF7E05]" size={20} />,
      label: 'Inscritos',
      value:
        totalCount === 1
          ? '1 pessoa confirmada'
          : `${totalCount ?? 0} pessoas confirmadas`,
    },
  ];

  return (
    <div className="rounded-xl border border-[#454545] bg-[#2E2E2E] p-6 shadow-sm">
      <h2 className="mb-6 border-b border-[#454545] pb-2 text-xl font-bold tracking-wider text-[#FF7E05] uppercase">
        Detalhes
      </h2>

      <div className="space-y-5">
        {details.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            {item.icon}
            <div>
              <p className="text-[10px] font-bold tracking-tight text-[#BEBEBE]/40 uppercase">
                {item.label}
              </p>
              <p
                className="font-medium text-[#BEBEBE]"
                {...(item.hydrate ? { suppressHydrationWarning: true } : {})}
              >
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
