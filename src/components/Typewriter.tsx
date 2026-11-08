import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { typewriterLines } from '../config/typewriter';

export interface TypewriterProps {
  lines?: readonly string[];
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  lines = typewriterLines,
  className = '',
}) => {
  const { displayText } = useTypewriter(lines);

  return (
    <div
      className={`font-pixel text-[clamp(14px,2.2vw,24px)] leading-relaxed uppercase text-text min-h-[1.5em] flex items-center flex-wrap ${className}`}
      aria-live="polite"
      aria-atomic="true"
    >
      <span>{displayText}</span>
      <span
        className="caret ml-2 inline-block w-[0.6em] h-[1em] bg-accent align-[-0.1em]"
        aria-hidden="true"
      />
    </div>
  );
};

