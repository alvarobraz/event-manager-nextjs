import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  hasNextPage: boolean;
  baseUrl: string;
}

export function Pagination({
  currentPage,
  hasNextPage,
  baseUrl,
}: PaginationProps) {
  return (
    <div className="mt-6 flex items-center justify-between border-t border-[#454545] pt-4">
      <Link
        href={`${baseUrl}?page=${currentPage - 1}`}
        className={`flex items-center gap-2 rounded-md border border-[#454545] px-4 py-2 text-xs font-bold uppercase transition-all ${
          currentPage <= 1
            ? 'pointer-events-none bg-[#212121] opacity-20'
            : 'text-[#BEBEBE] hover:bg-[#454545] active:scale-95'
        }`}
      >
        <ArrowLeft size={14} />
        Anterior
      </Link>

      <span className="text-[10px] font-bold tracking-widest text-[#FF7E05] uppercase">
        Página {currentPage}
      </span>

      <Link
        href={`${baseUrl}?page=${currentPage + 1}`}
        className={`flex items-center gap-2 rounded-md border border-[#454545] px-4 py-2 text-xs font-bold uppercase transition-all ${
          !hasNextPage
            ? 'pointer-events-none bg-[#212121] opacity-20'
            : 'text-[#BEBEBE] hover:bg-[#454545] active:scale-95'
        }`}
      >
        Próxima
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}
