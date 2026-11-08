import React from 'react';
import { experiences } from '../config/experience';
import { Pop } from './Pop';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-t-2 border-line">
      <Pop className="flex items-baseline gap-4 mb-12 flex-wrap">
        <h2 className="font-pixel font-normal text-[clamp(16px,2.4vw,22px)] uppercase text-text">
          <span className="text-accent">{'> '}</span>Experience
        </h2>
      </Pop>

      <div className="grid gap-6">
        {experiences.map((exp, index) => (
          <Pop key={exp.id} delayMs={index * 120}>
            <article className="bg-panel border-2 border-line p-7 grid grid-cols-1 desktop:grid-cols-[1fr_auto] gap-4 desktop:gap-7 items-start transition-[transform,box-shadow,border-color] duration-120 ease-[steps(2)] hover:border-accent hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_var(--accent)]">
              <div>
                <div className="font-pixel text-[10px] text-muted uppercase tracking-normal mb-3.5">
                  {exp.company}
                </div>
                <h3 className="font-pixel font-normal text-[clamp(14px,2vw,18px)] leading-[1.5] uppercase text-text mb-3.5">
                  {exp.role}
                </h3>
                <ul className="space-y-2.5 max-w-[640px]">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="font-body text-[20px] tablet:text-[24px] leading-[1.3] text-[#b8b8b0] flex items-start gap-2"
                    >
                      <span className="text-accent select-none shrink-0 mt-0.5">{'>'}</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="font-pixel text-[10px] uppercase tracking-normal py-2 px-2.5 whitespace-nowrap border-2 self-start border-accent text-accent">
                {exp.dates}
              </div>
            </article>
          </Pop>
        ))}
      </div>
    </section>
  );
};

