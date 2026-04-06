'use client';

import { Controller } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea'; // Importando o novo componente
import { ImageUpload } from './image-upload';
import { useCreateEvent } from '@/hooks/use-create-event';

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

      {/* Textarea */}
      <Textarea
        label="Descrição"
        placeholder="Conte mais sobre o evento..."
        rows={3}
        error={errors.description?.message}
        {...form.register('description')}
      />

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
