import React from 'react';
import { siteConfig } from '../config/site';

export const Footer: React.FC = () => {
  const { footer } = siteConfig;

  return (
    <footer className="border-t-2 border-line py-7 pb-10">
      <div className="max-w-[1040px] mx-auto px-6 flex justify-between flex-wrap gap-3 font-pixel text-[11px] uppercase tracking-normal text-muted">
        <span>{footer.copyright}</span>
        <span>{footer.coinText}</span>
      </div>
    </footer>
  );
};

