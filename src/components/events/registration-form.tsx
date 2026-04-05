'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { useRegistration } from '@/hooks/use-registration';

const registrationSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Insira um e-mail válido'),
  phone: z.string().min(10, 'Insira um telefone válido'),
});

type RegistrationData = z.infer<typeof registrationSchema>;

export function RegistrationForm({ eventId }: { eventId: string }) {
  const { register: submitRegistration, isLoading } = useRegistration(eventId);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = (data: RegistrationData) => {
    submitRegistration(data, reset);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="mb-1 block text-xs font-bold text-[#BEBEBE]/60 uppercase">
          Nome
        </label>
        <input
          {...register('name')}
          className="w-full rounded-md border border-[#454545] bg-[#212121] px-4 py-2 text-[#BEBEBE] outline-none focus:border-[#FF7E05]"
        />
        {errors.name && (
          <span className="mt-1 block text-[10px] text-red-500 uppercase">
            {errors.name.message}
          </span>
        )}
      </div>

      <div>
        <label className="mb-1 block text-xs font-bold text-[#BEBEBE]/60 uppercase">
          E-mail
        </label>
        <input
          {...register('email')}
          type="email"
          className="w-full rounded-md border border-[#454545] bg-[#212121] px-4 py-2 text-[#BEBEBE] outline-none focus:border-[#FF7E05]"
        />
        {errors.email && (
          <span className="mt-1 block text-[10px] text-red-500 uppercase">
            {errors.email.message}
          </span>
        )}
      </div>

      <div>
        <label className="mb-1 block text-xs font-bold text-[#BEBEBE]/60 uppercase">
          Telefone
        </label>
        <input
          {...register('phone')}
          className="w-full rounded-md border border-[#454545] bg-[#212121] px-4 py-2 text-[#BEBEBE] outline-none focus:border-[#FF7E05]"
        />
        {errors.phone && (
          <span className="mt-1 block text-[10px] text-red-500 uppercase">
            {errors.phone.message}
          </span>
        )}
      </div>

      <Button type="submit" className="mt-4 h-12 w-full" isLoading={isLoading}>
        Confirmar Minha Vaga
      </Button>
    </form>
  );
}
