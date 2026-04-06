import { User } from 'lucide-react';
import { ParticipantsTableProps } from '@/types';

export function ParticipantsTable({ participants }: ParticipantsTableProps) {
  if (participants.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#454545] p-10 text-center">
        <User size={40} className="mb-2 text-[#454545]" />
        <p className="text-sm tracking-widest text-[#BEBEBE]/50 uppercase">
          Nenhum participante inscrito ainda.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-[#454545] bg-[#2E2E2E]">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-[#454545] bg-[#212121]/50">
            <th className="px-6 py-4 text-xs font-bold tracking-wider text-[#FF7E05] uppercase">
              Participante
            </th>
            <th className="px-6 py-4 text-right text-xs font-bold tracking-wider text-[#FF7E05] uppercase">
              Inscrição
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#454545]">
          {participants.map((participant) => (
            <tr
              key={participant.id}
              className="group transition-colors hover:bg-[#212121]/30"
            >
              <td className="px-6 py-4">
                <p className="font-medium text-[#BEBEBE] transition-colors group-hover:text-white">
                  {participant.name}
                </p>
              </td>
              <td className="px-6 py-4 text-right">
                <span className="inline-flex items-center rounded-full border border-[#FF7E05]/20 bg-[#454545]/30 px-2.5 py-0.5 text-[10px] font-medium text-[#FF7E05] uppercase">
                  Confirmado
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
