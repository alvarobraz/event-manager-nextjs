import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft } from 'lucide-react';

export default function EventDetailsLoading() {
  return (
    <div className="animate-in fade-in py-8 duration-500">
      <div className="mb-6 flex items-center gap-2 text-sm font-medium text-[#BEBEBE]/20">
        <ArrowLeft size={16} />
        <Skeleton className="h-4 w-32" />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="space-y-6">
            <Skeleton className="h-100 w-full rounded-xl" />
            <div className="space-y-4">
              <Skeleton className="h-10 w-2/3" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          </div>

          <section className="border-t border-[#454545] pt-8">
            <div className="mb-6 flex items-center justify-between">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>

            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-12 w-full rounded-md" />
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="rounded-xl border border-[#454545] bg-[#2E2E2E]/30 p-6">
            <Skeleton className="mb-6 h-6 w-32" />
            <div className="space-y-4">
              <div className="flex gap-3">
                <Skeleton className="h-10 w-10 rounded-md" />
                <Skeleton className="h-10 flex-1" />
              </div>
              <div className="flex gap-3">
                <Skeleton className="h-10 w-10 rounded-md" />
                <Skeleton className="h-10 flex-1" />
              </div>
              <div className="flex gap-3">
                <Skeleton className="h-10 w-10 rounded-md" />
                <Skeleton className="h-10 flex-1" />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[#454545] bg-[#2E2E2E]/30 p-6">
            <Skeleton className="mb-6 h-6 w-32" />
            <div className="space-y-4">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="mt-4 h-12 w-full rounded-md" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
