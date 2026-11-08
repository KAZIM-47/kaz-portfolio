import { useEffect, useState } from 'react';
import { typewriterConfig, typewriterLines } from '../config/typewriter';
import { useReducedMotion } from './useReducedMotion';

export function useTypewriter(
  lines: readonly string[] = typewriterLines,
  config = typewriterConfig
): { displayText: string; currentLineIndex: number } {
  const prefersReduced = useReducedMotion();
  const [displayText, setDisplayText] = useState<string>(() => (lines.length > 0 ? lines[0] : ''));
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0);

  useEffect(() => {
    if (prefersReduced) {
      setDisplayText(lines[0] ?? '');
      setCurrentLineIndex(0);
      return;
    }

    if (lines.length === 0) return;

    let lineIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timerId: ReturnType<typeof setTimeout> | undefined;

    const tick = () => {
      const currentWord = lines[lineIdx];

      if (!isDeleting) {
        charIdx++;
        setDisplayText(currentWord.slice(0, charIdx));
        setCurrentLineIndex(lineIdx);

        if (charIdx === currentWord.length) {
          isDeleting = true;
          timerId = setTimeout(tick, config.pauseEndMs);
          return;
        }

        timerId = setTimeout(tick, config.typeSpeedMs);
      } else {
        charIdx--;
        setDisplayText(currentWord.slice(0, charIdx));
        setCurrentLineIndex(lineIdx);

        if (charIdx === 0) {
          isDeleting = false;
          lineIdx = (lineIdx + 1) % lines.length;
          timerId = setTimeout(tick, config.pauseStartMs);
          return;
        }

        timerId = setTimeout(tick, config.deleteSpeedMs);
      }
    };

    timerId = setTimeout(tick, config.typeSpeedMs);

    return () => {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
    };
  }, [lines, config, prefersReduced]);

  return { displayText, currentLineIndex };
}

