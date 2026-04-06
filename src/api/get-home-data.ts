import { eventService } from '@/services/events';

interface GetHomeDataParams {
  q?: string;
}

export async function getHomeData({ q }: GetHomeDataParams) {
  const allEvents = await eventService.getAll().catch(() => []);

  const events = q
    ? allEvents.filter(
        (event) =>
          event.name.toLowerCase().includes(q.toLowerCase()) ||
          event.description.toLowerCase().includes(q.toLowerCase())
      )
    : allEvents;

  return {
    events,
    query: q,
  };
}
