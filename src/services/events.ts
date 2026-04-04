import { api } from './api';

export interface EventWithDetails extends Event {
  bannerImage?: { url: string };
  _count?: { registrations: number };
}

export const eventService = {
  getAll: async () => {
    const { data } = await api.get<EventWithDetails[]>('/events');
    return data;
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
