'use client';

import { UploadCloud, X } from 'lucide-react';
import Image from 'next/image';
import { ImageUploadProps } from '@/types';
import { useImageUpload } from '@/hooks/use-image-upload';

export function ImageUpload({ onUploadSuccess, onRemove }: ImageUploadProps) {
  const { preview, isUploading, handleFileChange, removeImage } =
    useImageUpload({
      onUploadSuccess,
      onRemove,
    });

  return (
    <div className="space-y-2">
      <label className="block text-xs font-bold text-[#BEBEBE]/60 uppercase">
        Banner do Evento
      </label>

      <div className="relative h-52 w-full overflow-hidden rounded-md border-2 border-dashed border-[#454545] bg-[#212121] transition-colors hover:border-[#FF7E05]/50">
        {preview ? (
          <div className="relative h-full w-full">
            <Image
              src={preview}
              alt="Preview do banner"
              fill
              className={`rounded-md object-cover transition-opacity duration-300 ${
                isUploading ? 'opacity-30' : 'opacity-70'
              }`}
              unoptimized
            />

            <button
              type="button"
              onClick={removeImage}
              className="absolute top-4 right-4 z-10 rounded-full bg-red-500 p-1.5 text-white shadow-lg transition-transform hover:scale-110 hover:bg-red-600"
            >
              <X size={16} />
            </button>

            {isUploading && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/20">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#FF7E05] border-t-transparent" />
                <span className="mt-2 text-[10px] font-bold tracking-widest text-[#FF7E05] uppercase">
                  Enviando...
                </span>
              </div>
            )}
          </div>
        ) : (
          <label className="flex h-full w-full cursor-pointer flex-col items-center justify-center gap-2 p-6 text-center transition-all hover:bg-[#252525]">
            <UploadCloud
              size={32}
              className="text-[#454545] transition-colors group-hover:text-[#FF7E05]"
            />
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-[#BEBEBE]">
                Clique para subir o banner
              </span>
              <span className="text-[10px] tracking-tighter text-[#BEBEBE]/40 uppercase">
                JPG ou PNG (Recomendado 1200x600)
              </span>
            </div>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
        )}
      </div>
    </div>
  );
}
