'use client';

import { Search } from 'lucide-react';
import { useHeader } from '@/hooks/use-header';
import { Input } from './input';

export function SearchField() {
  const { showSearch, searchValue, setSearchValue } = useHeader();

  if (!showSearch) return <div className="flex-1" />;

  return (
    <div className="group animate-in fade-in zoom-in-95 relative max-w-xl flex-1 duration-300">
      <Input
        type="text"
        placeholder="Buscar eventos..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="rounded-3xl bg-[#212121]/50 py-3 pr-12 pl-6 placeholder:text-[#BEBEBE]/40 focus:bg-[#212121]"
      />
      <Search
        size={18}
        className="absolute top-1/2 right-4 -translate-y-1/2 text-[#BEBEBE] transition-colors group-focus-within:text-[#FF7E05] group-hover:text-[#FF7E05]"
      />
    </div>
  );
}
