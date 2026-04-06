'use client';

import { Button } from '@/components/ui/button';
import { useRegistrationForm } from '@/hooks/use-registration-form';

export function RegistrationForm({ eventId }: { eventId: string }) {
  const { register, handleSubmit, errors, isLoading } =
    useRegistrationForm(eventId);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-xs font-bold text-[#BEBEBE]/60 uppercase">
          Nome
        </label>
        <input
          {...register('name')}
          className={`w-full rounded-md border bg-[#212121] px-4 py-2 text-[#BEBEBE] transition-colors outline-none ${errors.name ? 'border-red-500' : 'border-[#454545] focus:border-[#FF7E05]'}`}
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
          className={`w-full rounded-md border bg-[#212121] px-4 py-2 text-[#BEBEBE] transition-colors outline-none ${errors.email ? 'border-red-500' : 'border-[#454545] focus:border-[#FF7E05]'}`}
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
          className={`w-full rounded-md border bg-[#212121] px-4 py-2 text-[#BEBEBE] transition-colors outline-none ${errors.phone ? 'border-red-500' : 'border-[#454545] focus:border-[#FF7E05]'}`}
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
