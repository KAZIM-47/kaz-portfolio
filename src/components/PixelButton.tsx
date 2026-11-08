import React from 'react';

export interface PixelButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'solid' | 'ghost';
  external?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
  download?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
  'aria-expanded'?: boolean | 'true' | 'false';
  'aria-controls'?: string;
}

export const PixelButton: React.FC<PixelButtonProps> = ({
  children,
  href,
  variant = 'solid',
  external = false,
  className = '',
  onClick,
  type = 'button',
  'aria-label': ariaLabel,
  download,
  target,
  rel,
  disabled = false,
  'aria-expanded': ariaExpanded,
  'aria-controls': ariaControls,
}) => {
  const baseClasses =
    'inline-block font-pixel text-[11px] uppercase tracking-normal px-5 py-4 select-none leading-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg';

  const variantClasses =
    variant === 'solid'
      ? 'border-2 border-text text-text bg-transparent'
      : 'border-2 border-line text-text bg-transparent';

  // Hard pixel shadow and press down 4px on hover/click with steps(1)
  const motionClasses = disabled
    ? 'shadow-[4px_4px_0_var(--line)] opacity-50 cursor-not-allowed pointer-events-none'
    : 'shadow-[4px_4px_0_var(--line)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-accent hover:text-bg hover:border-accent active:translate-x-1 active:translate-y-1 active:shadow-none transition-[transform,box-shadow,color,background-color,border-color] duration-100 ease-[steps(1)]';

  const combinedClasses = `${baseClasses} ${variantClasses} ${motionClasses} ${className}`.trim();

  if (href) {
    const computedTarget = target ?? (external ? '_blank' : undefined);
    const computedRel = rel ?? (external ? 'noopener noreferrer' : undefined);

    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={onClick}
        aria-label={ariaLabel}
        aria-expanded={ariaExpanded}
        aria-controls={ariaControls}
        download={download}
        target={computedTarget}
        rel={computedRel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
    >
      {children}
    </button>
  );
};

