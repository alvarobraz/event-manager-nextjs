import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Event as DatabaseEvent } from '@/types';

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

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

export interface ImageUploadProps {
  onUploadSuccess: (id: string) => void;
  onRemove: () => void;
}

export interface EventPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ page?: string }>;
}

export interface EventCardProps {
  event: EventWithDetails;
}

export interface ParticipantsTableProps {
  participants: Participant[];
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  isLoading?: boolean;
}

export interface UseCreateEventProps {
  onSuccess: () => void;
}

export interface RegistrationData {
  name: string;
  email: string;
  phone: string;
}

export interface UseImageUploadProps {
  onUploadSuccess: (id: string) => void;
  onRemove: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface EventWithDetails extends DatabaseEvent {}

export interface CreateEventPayload {
  name: string;
  description: string;
  date: string;
  bannerImageId: string;
}

export interface HomeProps {
  searchParams: Promise<{ q?: string }>;
}

export interface GetEventPageDataParams {
  id: string;
  page?: string;
}

export type CreateEventInput = Omit<
  Event,
  'id' | 'createdAt' | 'bannerImage' | 'registrations' | '_count'
>;
export type CreateParticipantInput = Omit<Participant, 'id' | 'createdAt'>;
