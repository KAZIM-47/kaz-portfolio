import React from 'react';
import { siteConfig } from '../config/site';
import { PixelButton } from './PixelButton';
import { ContactForm } from './ContactForm';
import { Pop } from './Pop';

export const Contact: React.FC = () => {
  const { github, linkedin, resume } = siteConfig;
  const [isFormOpen, setIsFormOpen] = React.useState(false);

  const toggleForm = () => {
    setIsFormOpen((prev) => !prev);
  };

  return (
    <section id="contact" className="pt-[110px] pb-20 border-t-2 border-line">
      <Pop className="font-pixel font-normal text-[clamp(22px,4.5vw,44px)] leading-[1.4] uppercase text-text mb-10">
        Continue?
        <br />
        <button
          type="button"
          onClick={toggleForm}
          aria-expanded={isFormOpen}
          aria-controls="contact-form"
          className="text-accent border-b-4 border-accent transition-colors duration-100 ease-[steps(1)] hover:bg-accent hover:text-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer text-left bg-transparent p-0 border-t-0 border-l-0 border-r-0 font-inherit uppercase leading-inherit inline select-none"
        >
          Press enter to email
        </button>
      </Pop>

      <Pop delayMs={150} className="flex gap-4 flex-wrap items-center">
        <PixelButton
          type="button"
          variant="solid"
          onClick={toggleForm}
          aria-expanded={isFormOpen}
          aria-controls="contact-form"
        >
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

      <ContactForm id="contact-form" hidden={!isFormOpen} />
    </section>
  );
};
