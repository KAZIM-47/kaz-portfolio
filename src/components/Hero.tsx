import React from 'react';
import { siteConfig } from '../config/site';
import { Typewriter } from './Typewriter';
import { PixelButton } from './PixelButton';
import { Pop } from './Pop';

export const Hero: React.FC = () => {
  const { name, lede, resume } = siteConfig;

  return (
    <section className="pt-20 pb-18 desktop:pt-[120px] desktop:pb-[100px]">
      {/* Name on two lines */}
      <Pop delayMs={0}>
        <h1 className="font-pixel font-normal text-[clamp(28px,6.2vw,64px)] leading-[1.25] uppercase text-text">
          {name.first}
          <br />
          <span className="text-accent">{name.accent}</span>
        </h1>
      </Pop>

      {/* Typewriter line */}
      <Pop delayMs={300} className="mt-9">
        <Typewriter />
      </Pop>

      {/* Lede */}
      <Pop delayMs={420} className="mt-7 max-w-[560px]">
        <p className="font-body text-[24px] leading-[1.3] text-[#b8b8b0]">
          {lede}
        </p>
      </Pop>

      {/* Buttons */}
      <Pop delayMs={540} className="mt-12 flex flex-wrap gap-4">
        <PixelButton href="#quests" variant="solid">
          Start
        </PixelButton>
        <PixelButton href="#contact" variant="ghost">
          Say hello
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
