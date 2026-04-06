import * as z from 'zod';

export const createEventSchema = z.object({
  name: z.string().min(3, 'Mínimo 3 caracteres'),
  description: z.string().min(10, 'Mínimo 10 caracteres'),
  date: z.string().min(1, 'Data obrigatória'),
  bannerImageId: z.string().min(1, 'O upload da imagem é obrigatório'),
});

export type CreateEventData = z.infer<typeof createEventSchema>;
