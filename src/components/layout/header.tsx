'use client';

import Link from 'next/link';
import { Search } from 'lucide-react';
import { Container } from './container';
import { Poppins } from 'next/font/google';
import { CreateEventModal } from '../events/create-event-modal';
import { useHeader } from '@/hooks/use-header';

const poppins = Poppins({
  weight: ['700'],
  subsets: ['latin'],
});

export function Header() {
  const { showSearch, searchValue, setSearchValue } = useHeader();

  return (
    <header className="sticky top-0 z-50 flex h-20 items-center border-b border-[#454545] bg-linear-to-r from-[#2e2e2e] to-[#3a3a3a] px-6">
      <Container>
        <div className="flex w-full items-center justify-between gap-8">
          {/* Logo */}
          <Link
            href="/"
            className={`${poppins.className} shrink-0 text-xl font-bold tracking-wider text-[#FF7E05] uppercase transition-opacity hover:opacity-80`}
          >
            Eventos
          </Link>

          {/* Search - Renderização Condicional via Hook */}
          {showSearch ? (
            <div className="group animate-in fade-in zoom-in-95 relative max-w-xl flex-1 duration-300">
              <input
                type="text"
                placeholder="Buscar eventos..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full rounded-3xl border border-[#454545] bg-[#212121]/50 py-3 pr-12 pl-6 text-[#BEBEBE] transition-all outline-none placeholder:text-[#BEBEBE]/40 focus:border-[#FF7E05] focus:bg-[#212121]"
              />

              <Search
                size={18}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-[#BEBEBE] transition-colors group-focus-within:text-[#FF7E05] group-hover:text-[#FF7E05]"
              />
            </div>
          ) : (
            <div className="flex-1" />
          )}

          {/* Ações */}
          <nav className="flex items-center gap-4">
            <CreateEventModal />
          </nav>
        </div>
      </Container>
    </header>
  );
}
