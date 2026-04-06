import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { eventService } from '@/services/events';
import { UseCreateEventProps } from '@/types';

const createEventSchema = z.object({
  name: z.string().min(3, 'Mínimo 3 caracteres'),
  description: z.string().min(10, 'Mínimo 10 caracteres'),
  date: z.string().min(1, 'Data obrigatória'),
  bannerImageId: z.string().min(1, 'O upload da imagem é obrigatório'),
});

export type CreateEventData = z.infer<typeof createEventSchema>;

export function useCreateEvent({ onSuccess }: UseCreateEventProps) {
  const router = useRouter();

  const form = useForm<CreateEventData>({
    resolver: zodResolver(createEventSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      description: '',
      date: '',
      bannerImageId: '',
    },
  });

  const bannerImageId = useWatch({
    control: form.control,
    name: 'bannerImageId',
  });

  const onSubmit = async (data: CreateEventData) => {
    try {
      await eventService.create(data);
      toast.success('Evento criado com sucesso!');
      onSuccess();
      router.refresh();
      form.reset();
    } catch (error) {
      console.error('Erro ao salvar evento:', error);
      toast.error('Erro ao salvar evento.');
    }
  };

  return {
    form,
    bannerImageId,
    onSubmit: form.handleSubmit(onSubmit),
    isSubmitting: form.formState.isSubmitting,
    errors: form.formState.errors,
  };
}
