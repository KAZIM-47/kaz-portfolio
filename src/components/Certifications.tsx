import React from 'react';
import { certifications } from '../config/certifications';
import { Pop } from './Pop';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 border-t-2 border-line">
      <Pop className="flex items-baseline gap-4 mb-12 flex-wrap">
        <h2 className="font-pixel font-normal text-[clamp(16px,2.4vw,22px)] uppercase text-text">
          <span className="text-accent">{'> '}</span>Certifications
        </h2>
      </Pop>

      <div className="grid gap-3">
        {certifications.map((item, index) => (
          <Pop key={item.id} delayMs={index * 100}>
            <div className="bg-panel border-2 border-line py-4 px-6 flex flex-col tablet:flex-row justify-between items-start tablet:items-center gap-2 transition-[border-color] duration-120 ease-[steps(2)] hover:border-accent">
              <div className="flex flex-col tablet:flex-row tablet:items-baseline gap-1 tablet:gap-3">
                <span className="font-body text-[22px] tablet:text-[24px] text-text">
                  {item.title}
                </span>
                <span className="font-body text-[18px] tablet:text-[20px] text-muted">
                  — {item.issuer}
                </span>
              </div>
              <span className="font-pixel text-[10px] uppercase tracking-normal text-muted">
                {item.year}
              </span>
            </div>
          </Pop>
        ))}
      </div>
    </section>
  );
};

