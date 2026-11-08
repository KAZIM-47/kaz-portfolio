import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

export interface UsePopInOptions {
  threshold?: number;
  delayMs?: number;
}

export function usePopIn<T extends HTMLElement = HTMLDivElement>(
  options: UsePopInOptions = {}
) {
  const { threshold = 0.15, delayMs = 0 } = options;
  const ref = useRef<T | null>(null);
  const reducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState<boolean>(() => reducedMotion);

  useEffect(() => {
    if (reducedMotion) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, reducedMotion]);

  return { ref, isVisible, delayMs, reducedMotion };
}

