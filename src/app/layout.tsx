import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

import { Header } from '@/components/layout/header';
import { Container } from '@/components/layout/container';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Event Manager | Organize seus eventos',
  description: 'Plataforma para gestão de eventos e participantes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} min-h-screen bg-[#212121] text-[#BEBEBE] antialiased`}
      >
        <Header />

        <main>
          <Container>{children}</Container>
        </main>
      </body>
    </html>
  );
}
