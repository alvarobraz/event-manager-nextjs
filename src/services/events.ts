import { api } from './api';

import { Event as DatabaseEvent, Participant } from '@/types';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface EventWithDetails extends DatabaseEvent {}

export const eventService = {
  getAll: async () => {
    const { data } = await api.get<{ events: EventWithDetails[] }>('/events');
    return data.events;
  },
  getById: async (id: string, page = 1, pageSize = 10) => {
    const { data } = await api.get<{
      event: EventWithDetails;
      participants: Participant[];
    }>(`/events/${id}/participants`, {
      params: { page, pageSize },
    });

    return data;
  },
  getTotalParticipants: async (id: string) => {
    const { data } = await api.get<{ participants: Participant[] }>(
      `/events/${id}/participants`
    );
    return data.participants.length;
  },
  create: async (payload: FormData) => {
    const { data } = await api.post('/events', payload);
    return data;
  },

  createParticipant: async (data: {
    name: string;
    email: string;
    phone: string;
  }) => {
    const response = await api.post<{ participant_id: string }>(
      '/participants',
      data
    );
    return response.data;
  },

  subscribeToEvent: async (eventId: string, participantId: string) => {
    const response = await api.post(`/events/${eventId}/participants`, {
      participantId,
    });
    return response.data;
  },
};
