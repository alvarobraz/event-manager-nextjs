import { notFound } from 'next/navigation';
import { eventService } from '@/services/events';
import { GetEventPageDataParams } from '@/types';

export async function getEventPageData({ id, page }: GetEventPageDataParams) {
  const PAGE_SIZE = 10;
  const currentPage = Number(page) || 1;

  const [data, totalCount] = await Promise.all([
    eventService.getById(id, currentPage, PAGE_SIZE).catch(() => null),
    eventService.getTotalParticipants(id).catch(() => 0),
  ]);

  if (!data?.event) {
    notFound();
  }

  const hasNextPage = data.participants.length === PAGE_SIZE;

  return {
    event: data.event,
    participants: data.participants,
    totalCount,
    currentPage,
    hasNextPage,
  };
}
