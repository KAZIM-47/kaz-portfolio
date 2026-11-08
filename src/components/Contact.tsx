import React from 'react';
import { siteConfig } from '../config/site';
import { PixelButton } from './PixelButton';
import { Pop } from './Pop';

export const Contact: React.FC = () => {
  const { email, github, linkedin, resume } = siteConfig;

  return (
    <section id="contact" className="pt-[110px] pb-20 border-t-2 border-line">
      <Pop className="font-pixel font-normal text-[clamp(22px,4.5vw,44px)] leading-[1.4] uppercase text-text mb-10">
        Continue?
        <br />
        <a
          href={`mailto:${email}`}
          className="text-accent border-b-4 border-accent transition-colors duration-100 ease-[steps(1)] hover:bg-accent hover:text-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          Press enter to email
        </a>
      </Pop>

      <Pop delayMs={150} className="flex gap-4 flex-wrap">
        <PixelButton href={`mailto:${email}`} variant="solid">
          Email
        </PixelButton>
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

