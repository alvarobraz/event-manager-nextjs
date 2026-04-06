import { EventCardSkeleton } from '@/components/events/event-card-skeleton';

export default function Loading() {
  return (
    <div className="py-8">
      <div className="mb-10 flex flex-col gap-2 border-l-4 border-[#454545] pl-6">
        <div className="h-9 w-64 animate-pulse rounded bg-[#454545]/40" />
        <div className="h-5 w-96 animate-pulse rounded bg-[#454545]/20" />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <EventCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
