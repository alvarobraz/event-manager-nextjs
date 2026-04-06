import { InputProps } from '@/types';
import { cn } from '@/utils/utils';
import { forwardRef } from 'react';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full space-y-1">
        {label && (
          <label className="block text-xs font-bold text-[#BEBEBE]/60 uppercase">
            {label}
          </label>
        )}

        <input
          ref={ref}
          className={cn(
            'w-full rounded-md border bg-[#212121] px-4 py-2 text-[#BEBEBE] transition-colors outline-none',
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

Input.displayName = 'Input';
