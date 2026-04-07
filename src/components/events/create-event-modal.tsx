'use client';

import { createPortal } from 'react-dom';
import { X, Plus } from 'lucide-react';
import { CreateEventForm } from './create-event-form';
import { Button } from '../ui/button';
import { useModal } from '@/hooks/use-modal';

export function CreateEventModal() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Button onClick={openModal} className="flex items-center gap-2 px-6">
        <Plus size={18} />
        Criar evento
      </Button>

      {isOpen &&
        createPortal(
          <div
            className="z- fixed inset-0 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={closeModal}
          >
            <div
              className="animate-in zoom-in-95 relative w-full max-w-xl rounded-xl border border-[#454545] bg-[#2E2E2E] p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="mt-8 mb-8 flex items-center justify-between border-b border-[#454545] pb-4">
                <div>
                  <h2 className="text-xl font-bold tracking-wider text-[#FF7E05] uppercase">
                    Novo Evento
                  </h2>
                  <p className="mt-1 text-xs text-[#BEBEBE]/40 uppercase">
                    Preencha os detalhes para publicar seu evento
                  </p>
                </div>

                <button
                  onClick={closeModal}
                  className="rounded-md p-1 text-[#BEBEBE] transition-colors hover:bg-[#454545] hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Formulário */}
              <CreateEventForm onSuccess={closeModal} />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
