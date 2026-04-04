export interface Attachment {
  id: string;
  title: string;
  url: string;
}

export interface Participant {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

export interface Registration {
  id: string;
  registeredAt: string;
  eventId: string;
  participantId: string;
  participant?: Participant;
}

export interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  createdAt: string;
  bannerImageId?: string | null;
  bannerImage?: Attachment | null;
  registrations?: Registration[];
  _count?: {
    registrations: number;
  };
}

export type CreateEventInput = Omit<
  Event,
  'id' | 'createdAt' | 'bannerImage' | 'registrations' | '_count'
>;
export type CreateParticipantInput = Omit<Participant, 'id' | 'createdAt'>;
