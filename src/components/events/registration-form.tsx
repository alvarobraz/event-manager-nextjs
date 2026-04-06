'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRegistrationForm } from '@/hooks/use-registration-form';

export function RegistrationForm({ eventId }: { eventId: string }) {
  const { register, handleSubmit, errors, isLoading } =
    useRegistrationForm(eventId);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Nome"
        placeholder="Seu nome completo"
        error={errors.name?.message}
        {...register('name')}
      />

      <Input
        label="E-mail"
        type="email"
        placeholder="exemplo@email.com"
        error={errors.email?.message}
        {...register('email')}
      />

      <Input
        label="Telefone"
        placeholder="(00) 00000-0000"
        error={errors.phone?.message}
        {...register('phone')}
      />

      <Button type="submit" className="mt-4 h-12 w-full" isLoading={isLoading}>
        Confirmar Minha Vaga
      </Button>
    </form>
  );
}
