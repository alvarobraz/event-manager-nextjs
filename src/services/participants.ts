import { api } from './api';
import { Participant, Registration } from '@/types';

export const participantService = {
  create: async (data: { name: string; email: string; phone: string }) => {
    const { data: response } = await api.post<Participant>(
      '/participants',
      data
    );
    return response;
  },

  registerToEvent: async (eventId: string, participantId: string) => {
    const { data: response } = await api.post<Registration>(
      `/events/${eventId}/register`,
      {
        participantId,
      }
    );
    return response;
  },

  getAll: async () => {
    const { data: response } = await api.get<Participant[]>('/participants');
    return response;
  },
};
