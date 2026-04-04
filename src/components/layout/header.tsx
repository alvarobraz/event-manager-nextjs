import Link from 'next/link';
import { Search } from 'lucide-react';
import { Container } from './container';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['700'],
  subsets: ['latin'],
});

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-20 items-center border-b border-[#454545] bg-linear-to-r from-[#2e2e2e] to-[#3a3a3a] px-6">
      <Container>
        <div className="flex w-full items-center justify-between gap-8">
          {/* Logo */}
          <Link
            href="/"
            className={`${poppins.className} shrink-0 text-xl font-bold tracking-wider text-[#FF7E05] uppercase`}
          >
            Eventos
          </Link>

          {/* Search */}
          <div className="group relative max-w-xl flex-1">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full rounded-[500px] border border-[#454545] bg-[#212121]/50 py-3 pr-12 pl-6 text-[#BEBEBE] transition-all outline-none placeholder:text-[#BEBEBE]/40 focus:border-[#FF7E05]"
            />
            <Search
              size={18}
              className="absolute top-1/2 right-4 -translate-y-1/2 text-[#BEBEBE] transition-colors group-focus-within:text-[#FF7E05] group-hover:text-[#FF7E05]"
            />
          </div>

          {/* Botão */}
          <nav>
            <Link
              href="/events/create"
              className="text-sm font-semibold tracking-wide text-[#BEBEBE] uppercase transition-colors hover:text-[#FF7E05]"
            >
              Criar Evento
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
