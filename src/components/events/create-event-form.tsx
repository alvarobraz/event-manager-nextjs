'use client';

import { Controller } from 'react-hook-form';
import { Button } from '@/components/ui/button';
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

      {/* Inputs de Texto */}
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1">
          <label className="mb-1 block text-xs font-bold text-[#BEBEBE]/60 uppercase">
            Título
          </label>
          <input
            {...form.register('name')}
            className={`w-full rounded-md border bg-[#212121] px-4 py-2 text-[#BEBEBE] transition-colors outline-none ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-[#454545] focus:border-[#FF7E05]'}`}
          />
          {errors.name && (
            <span className="mt-1 block text-[10px] font-bold text-red-500 uppercase">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="col-span-2 md:col-span-1">
          <label className="mb-1 block text-xs font-bold text-[#BEBEBE]/60 uppercase">
            Data
          </label>
          <input
            {...form.register('date')}
            type="datetime-local"
            className={`w-full rounded-md border bg-[#212121] px-4 py-2 text-[#BEBEBE] transition-colors outline-none ${errors.date ? 'border-red-500 focus:border-red-500' : 'border-[#454545] focus:border-[#FF7E05]'}`}
          />
          {errors.date && (
            <span className="mt-1 block text-[10px] font-bold text-red-500 uppercase">
              {errors.date.message}
            </span>
          )}
        </div>
      </div>

      <div>
        <label className="mb-1 block text-xs font-bold text-[#BEBEBE]/60 uppercase">
          Descrição
        </label>
        <textarea
          {...form.register('description')}
          rows={3}
          className={`w-full resize-none rounded-md border bg-[#212121] px-4 py-2 text-[#BEBEBE] transition-colors outline-none ${errors.description ? 'border-red-500 focus:border-red-500' : 'border-[#454545] focus:border-[#FF7E05]'}`}
        />
        {errors.description && (
          <span className="mt-1 block text-[10px] font-bold text-red-500 uppercase">
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
