'use client';

import Link from 'next/link';
import { Suspense } from 'react';
import { Container } from './container';
import { Poppins } from 'next/font/google';
import { CreateEventModal } from '../events/create-event-modal';
import { SearchField } from '../ui/searchField';

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
            className={`${poppins.className} shrink-0 text-xl font-bold tracking-wider text-[#FF7E05] uppercase transition-opacity hover:opacity-80`}
          >
            Eventos
          </Link>

          <Suspense fallback={<div className="flex-1" />}>
            <SearchField />
          </Suspense>

          {/* Ações */}
          <nav className="flex items-center gap-4">
            <CreateEventModal />
          </nav>
        </div>
      </Container>
    </header>
  );
}
