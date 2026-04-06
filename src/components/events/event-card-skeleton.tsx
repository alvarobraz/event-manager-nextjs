import { Skeleton } from '@/components/ui/skeleton';

export function EventCardSkeleton() {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-[#454545] bg-[#2E2E2E]/50 p-4">
      {/* Imagem */}
      <Skeleton className="aspect-video w-full rounded-lg bg-[#454545]/40" />

      {/* Conteúdo */}
      <div className="space-y-3">
        <Skeleton className="h-6 w-3/4 bg-[#454545]/40" />
        <Skeleton className="h-4 w-full bg-[#454545]/20" />
        <div className="flex gap-2">
          <Skeleton className="h-4 w-20 bg-[#454545]/20" />
          <Skeleton className="h-4 w-20 bg-[#454545]/20" />
        </div>
      </div>
    </div>
  );
}
