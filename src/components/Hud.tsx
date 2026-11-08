import React from 'react';
import { siteConfig } from '../config/site';

export const Hud: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 h-[56px] bg-bg border-b-2 border-line">
      <div className="max-w-[1040px] mx-auto px-6 h-full flex justify-between items-center">
        {/* Brand */}
        <a
          href="#"
          className="font-pixel text-[11px] uppercase tracking-normal text-text select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          KAZ
        </a>

        {/* Navigation - hidden under 720px */}
        <nav
          className="hidden desktop:flex items-center gap-[22px] font-pixel text-[11px] uppercase tracking-normal"
          aria-label="Main Navigation"
        >
          <a
            href="#quests"
            onClick={() => {
              window.dispatchEvent(new CustomEvent('expand-projects'));
            }}
            className="text-muted hover:text-accent transition-colors duration-150 ease-[steps(2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-muted hover:text-accent transition-colors duration-150 ease-[steps(2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Experience
          </a>
          <a
            href="#inventory"
            onClick={() => {
              window.dispatchEvent(new CustomEvent('expand-skills'));
            }}
            className="text-muted hover:text-accent transition-colors duration-150 ease-[steps(2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Skills
          </a>
          <a
            href={siteConfig.resume.href}
            target="_blank"
            rel="noopener"
            download={siteConfig.resume.filename}
            aria-label="Download KAZ's resume (PDF)"
            className="text-muted hover:text-accent transition-colors duration-150 ease-[steps(2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="text-muted hover:text-accent transition-colors duration-150 ease-[steps(2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
