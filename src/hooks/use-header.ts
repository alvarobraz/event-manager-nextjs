import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useMemo, useState, useEffect, useRef } from 'react';

export function useHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get('q') || '';
  const [searchValue, setSearchValue] = useState(initialQuery);

  const lastQueryRef = useRef(initialQuery);

  const showSearch = useMemo(() => {
    return pathname === '/';
  }, [pathname]);

  useEffect(() => {
    if (!showSearch) return;

    const handler = setTimeout(() => {
      if (searchValue === lastQueryRef.current) return;

      const params = new URLSearchParams(window.location.search);

      if (searchValue) {
        params.set('q', searchValue);
      } else {
        params.delete('q');
      }

      lastQueryRef.current = searchValue;
      router.push(`?${params.toString()}`, { scroll: false });
    }, 300);

    return () => clearTimeout(handler);
  }, [searchValue, router, showSearch]);

  return {
    showSearch,
    searchValue,
    setSearchValue,
  };
}
