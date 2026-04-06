import * as z from 'zod';

export const registrationSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Insira um e-mail válido'),
  phone: z.string().min(10, 'Insira um telefone válido'),
});

export type RegistrationData = z.infer<typeof registrationSchema>;
