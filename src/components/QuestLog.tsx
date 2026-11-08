import React from 'react';
import { quests } from '../config/quests';
import { QuestCard } from './QuestCard';
import { Pop } from './Pop';

export const QuestLog: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  React.useEffect(() => {
    const handleExpand = () => setIsOpen(true);
    window.addEventListener('expand-projects', handleExpand);

    const handleHash = () => {
      if (window.location.hash === '#quests') {
        setIsOpen(true);
      }
    };
    window.addEventListener('hashchange', handleHash);

    return () => {
      window.removeEventListener('expand-projects', handleExpand);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  return (
    <section id="quests" className="py-24 border-t-2 border-line">
      <Pop className="flex items-baseline gap-4 mb-12 flex-wrap">
        <h2 className="font-pixel font-normal text-[clamp(16px,2.4vw,22px)] uppercase text-text flex items-center">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="projects-list"
            aria-label={isOpen ? 'Collapse projects section' : 'Expand projects section'}
            className="arrow-toggle mr-2.5 inline-flex items-center justify-center cursor-pointer select-none"
          >
            <span
              className="inline-block transition-transform duration-150 ease-[steps(3)] text-accent select-none"
              style={{
                transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
              }}
            >
              &gt;
            </span>
          </button>
          <span>Projects</span>
        </h2>
      </Pop>

      <div
        id="projects-list"
        className={`grid gap-6 ${!isOpen ? 'hidden' : ''}`}
        hidden={!isOpen}
      >
        {quests.map((quest, index) => (
          <Pop key={quest.id || index} delayMs={index * 120}>
            <QuestCard quest={quest} index={index} />
          </Pop>
        ))}
      </div>
    </section>
  );
};
