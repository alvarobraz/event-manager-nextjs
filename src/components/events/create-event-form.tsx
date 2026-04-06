'use client';

import { Controller } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ImageUpload } from './image-upload';
import { useCreateEvent } from '@/hooks/use-create-event';
import { cn } from '@/utils/utils';

export function CreateEventForm({ onSuccess }: { onSuccess: () => void }) {
  const { form, bannerImageId, onSubmit, isSubmitting, errors } =
    useCreateEvent({ onSuccess });

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Banner Upload */}
      <div className="space-y-2">
        <Controller
          control={form.control}
          name="bannerImageId"
          render={({ field: { onChange } }) => (
            <ImageUpload
              onUploadSuccess={onChange}
              onRemove={() => onChange('')}
            />
          )}
        />
        {errors.bannerImageId && (
          <span className="block animate-pulse text-[10px] font-bold text-red-500 uppercase">
            {errors.bannerImageId.message}
          </span>
        )}
      </div>

      {/* Grid de Inputs */}
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1">
          <Input
            label="Título"
            placeholder="Nome do evento"
            error={errors.name?.message}
            {...form.register('name')}
          />
        </div>

        <div className="col-span-2 md:col-span-1">
          <Input
            label="Data"
            type="datetime-local"
            error={errors.date?.message}
            {...form.register('date')}
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="block text-xs font-bold text-[#BEBEBE]/60 uppercase">
          Descrição
        </label>
        <textarea
          {...form.register('description')}
          rows={3}
          className={cn(
            'w-full resize-none rounded-md border bg-[#212121] px-4 py-2 text-[#BEBEBE] transition-colors outline-none',
            errors.description
              ? 'border-red-500 focus:border-red-500'
              : 'border-[#454545] focus:border-[#FF7E05]'
          )}
        />
        {errors.description && (
          <span className="block text-[10px] font-bold text-red-500 uppercase">
            {errors.description.message}
          </span>
        )}
      </div>

      <Button
        type="submit"
        className="mt-2 h-12 w-full"
        isLoading={isSubmitting}
        disabled={!bannerImageId}
      >
        Finalizar e Criar Evento
      </Button>
    </form>
  );
}
