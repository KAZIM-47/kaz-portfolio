import React from 'react';
import { usePopIn } from '../hooks/usePopIn';

export interface PopProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  threshold?: number;
}

export const Pop: React.FC<PopProps> = ({
  children,
  delayMs = 0,
  className = '',
  as: Component = 'div',
  threshold = 0.15,
  style,
  ...props
}) => {
  const { ref, isVisible, reducedMotion } = usePopIn<HTMLElement>({ threshold, delayMs });

  const customStyle: React.CSSProperties = {
    ...style,
    ...(delayMs > 0 ? ({ '--d': `${delayMs}ms` } as React.CSSProperties) : {}),
  };

  const popClasses = reducedMotion
    ? className
    : `pop ${isVisible ? 'go' : ''} ${className}`.trim();

  return React.createElement(
    Component,
    {
      ref,
      className: popClasses,
      style: customStyle,
      ...props,
    },
    children
  );
};

