'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { eventService } from '@/services/events';

const registrationSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Insira um e-mail válido'),
  phone: z.string().min(10, 'Insira um telefone válido (DDD + número)'),
});

type RegistrationData = z.infer<typeof registrationSchema>;

interface RegistrationFormProps {
  eventId: string;
}

export function RegistrationForm({ eventId }: RegistrationFormProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationData) => {
    try {
      const participant = await eventService.createParticipant({
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (participant?.id) {
        await eventService.subscribeToEvent(eventId, participant.id);

        alert('Inscrição confirmada com sucesso!');

        reset();
        router.refresh();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Erro na inscrição:', error);
      const message =
        error.response?.data?.message || 'Erro ao realizar inscrição.';
      alert(message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Campo Nome */}
      <div>
        <label className="mb-1 block text-xs font-bold text-[#BEBEBE]/60 uppercase">
          Nome Completo
        </label>
        <input
          {...register('name')}
          placeholder="Seu nome"
          className="w-full rounded-md border border-[#454545] bg-[#212121] px-4 py-2 text-[#BEBEBE] transition-colors outline-none focus:border-[#FF7E05]"
        />
        {errors.name && (
          <span className="mt-1 block text-[10px] text-red-500 uppercase">
            {errors.name.message}
          </span>
        )}
      </div>

      {/* Campo E-mail */}
      <div>
        <label className="mb-1 block text-xs font-bold text-[#BEBEBE]/60 uppercase">
          E-mail
        </label>
        <input
          {...register('email')}
          type="email"
          placeholder="seu@email.com"
          className="w-full rounded-md border border-[#454545] bg-[#212121] px-4 py-2 text-[#BEBEBE] transition-colors outline-none focus:border-[#FF7E05]"
        />
        {errors.email && (
          <span className="mt-1 block text-[10px] text-red-500 uppercase">
            {errors.email.message}
          </span>
        )}
      </div>

      {/* Campo Telefone */}
      <div>
        <label className="mb-1 block text-xs font-bold text-[#BEBEBE]/60 uppercase">
          Telefone / WhatsApp
        </label>
        <input
          {...register('phone')}
          type="tel"
          placeholder="(41) 99999-9999"
          className="w-full rounded-md border border-[#454545] bg-[#212121] px-4 py-2 text-[#BEBEBE] transition-colors outline-none focus:border-[#FF7E05]"
        />
        {errors.phone && (
          <span className="mt-1 block text-[10px] text-red-500 uppercase">
            {errors.phone.message}
          </span>
        )}
      </div>

      <Button
        type="submit"
        className="mt-4 h-12 w-full"
        isLoading={isSubmitting}
      >
        Confirmar Minha Vaga
      </Button>
    </form>
  );
}
