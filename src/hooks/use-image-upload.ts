import { useState, useCallback, useEffect } from 'react';
import { api } from '@/services/api';
import { toast } from 'sonner';
import { UseImageUploadProps } from '@/types';

export function useImageUpload({
  onUploadSuccess,
  onRemove,
}: UseImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.item(0);
      if (!file) return;

      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      setIsUploading(true);

      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await api.post('/attachments', formData);
        const id = response.data?.attachment?.id;

        if (id) {
          onUploadSuccess(id);
          toast.success('Imagem carregada!');
        } else {
          throw new Error('ID do anexo não encontrado');
        }
      } catch (error) {
        console.error(error);
        toast.error('Erro ao subir imagem.');
        setPreview(null);
        onRemove();
      } finally {
        setIsUploading(false);
      }
    },
    [onUploadSuccess, onRemove]
  );

  const removeImage = useCallback(() => {
    setPreview(null);
    onRemove();
  }, [onRemove]);

  return {
    preview,
    isUploading,
    handleFileChange,
    removeImage,
  };
}
