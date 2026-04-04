import { api } from './api';

import { Event as DatabaseEvent } from '@/types';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface EventWithDetails extends DatabaseEvent {}

export const eventService = {
  getAll: async () => {
    const { data } = await api.get<{ events: EventWithDetails[] }>('/events');
    return data.events;
  },
  getById: async (id: string) => {
    const { data } = await api.get<EventWithDetails>(`/events/${id}`);
    return data;
  },
  create: async (payload: FormData) => {
    const { data } = await api.post('/events', payload);
    return data;
  },
};
