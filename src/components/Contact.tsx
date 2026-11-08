import React from 'react';
import { siteConfig } from '../config/site';
import { PixelButton } from './PixelButton';
import { Pop } from './Pop';

export const Contact: React.FC = () => {
  const { email, github, linkedin, resume } = siteConfig;
  const [copied, setCopied] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEmailClick = () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(email).catch(() => {});
      }
    } catch {
      // Guarded: do nothing if it fails
    }

    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section id="contact" className="pt-[110px] pb-20 border-t-2 border-line">
      <Pop className="font-pixel font-normal text-[clamp(22px,4.5vw,44px)] leading-[1.4] uppercase text-text mb-10">
        Continue?
        <br />
        <a
          href={`mailto:${email}`}
          onClick={handleEmailClick}
          className="text-accent border-b-4 border-accent transition-colors duration-100 ease-[steps(1)] hover:bg-accent hover:text-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          Press enter to email
        </a>
      </Pop>

      <Pop delayMs={150} className="flex gap-4 flex-wrap items-center">
        <div className="inline-flex items-center gap-3">
          <PixelButton
            href={`mailto:${email}`}
            variant="solid"
            onClick={handleEmailClick}
          >
            Email
          </PixelButton>
          {copied && (
            <span className="font-pixel text-[10px] text-muted uppercase tracking-normal select-none">
              Email copied
            </span>
          )}
        </div>
        <PixelButton href={github} variant="solid" external>
          GitHub
        </PixelButton>
        <PixelButton href={linkedin} variant="solid" external>
          LinkedIn
        </PixelButton>
        <PixelButton
          href={resume.href}
          variant="solid"
          target="_blank"
          rel="noopener"
          download={resume.filename}
          aria-label="Download KAZ's resume (PDF)"
        >
          {resume.label}
        </PixelButton>
      </Pop>
    </section>
  );
};
