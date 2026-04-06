import { useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { eventService } from '@/services/events';
import { RegistrationData } from '@/types';

export function useRegistration(eventId: string) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const register = async (data: RegistrationData, resetForm: () => void) => {
    setIsLoading(true);
    const toastId = toast.loading('Processando sua inscrição...');

    try {
      const response = await eventService.createParticipant(data);
      const participantId = response.participant_id;

      if (participantId) {
        await eventService.subscribeToEvent(eventId, participantId);

        toast.success('Inscrição confirmada! Vaga garantida.', { id: toastId });
        resetForm();
        router.refresh();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error);
      const status = error.response?.status;
      const message = error.response?.data?.message;

      if (status === 409) {
        toast.error(
          'Este e-mail ou telefone já estão inscritos neste evento.',
          {
            id: toastId,
          }
        );
      } else {
        toast.error(message || 'Erro ao realizar inscrição. Tente novamente.', {
          id: toastId,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { register, isLoading };
}
