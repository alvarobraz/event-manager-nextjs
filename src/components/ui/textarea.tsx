import { cn } from '@/utils/utils';
import { forwardRef, TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full space-y-1">
        {label && (
          <label className="block text-xs font-bold text-[#BEBEBE]/60 uppercase">
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          className={cn(
            'w-full resize-none rounded-md border bg-[#212121] px-4 py-2 text-[#BEBEBE] transition-colors outline-none',
            error
              ? 'border-red-500 focus:border-red-500'
              : 'border-[#454545] focus:border-[#FF7E05]',
            className
          )}
          {...props}
        />

        {error && (
          <span className="block text-[10px] font-bold text-red-500 uppercase">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
