import { ButtonProps } from '@/types';

export function Button({
  children,
  variant = 'primary',
  isLoading,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'px-6 py-3 rounded-3xl font-semibold uppercase tracking-wider text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer';

  const variants = {
    primary:
      'bg-[#FF7E05] text-[#212121] hover:bg-[#E67204] active:scale-[0.98]',

    outline:
      'border border-[#454545] text-[#FF7E05] hover:border-[#FF7E05] hover:bg-[#FF7E05]/5 active:scale-[0.98]',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        children
      )}
    </button>
  );
}
