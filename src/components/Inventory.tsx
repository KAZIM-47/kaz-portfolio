import React from 'react';
import { inventoryGroups } from '../config/inventory';
import { InventoryGroup } from './InventoryGroup';
import { Pop } from './Pop';

export const Inventory: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  React.useEffect(() => {
    const handleExpand = () => setIsOpen(true);
    window.addEventListener('expand-skills', handleExpand);

    const handleHash = () => {
      if (window.location.hash === '#inventory') {
        setIsOpen(true);
      }
    };
    window.addEventListener('hashchange', handleHash);

    return () => {
      window.removeEventListener('expand-skills', handleExpand);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  return (
    <section id="inventory" className="py-24 border-t-2 border-line">
      <Pop className="flex items-baseline gap-4 mb-12 flex-wrap">
        <h2 className="font-pixel font-normal text-[clamp(16px,2.4vw,22px)] uppercase text-text flex items-center">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="skills-list"
            aria-label={isOpen ? 'Collapse skills section' : 'Expand skills section'}
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
          <span>SKILLS</span>
        </h2>
      </Pop>

      <div
        id="skills-list"
        className={!isOpen ? 'hidden' : ''}
        hidden={!isOpen}
      >
        {inventoryGroups.map((group, index) => (
          <Pop key={group.label} delayMs={index * 100}>
            <InventoryGroup group={group} />
          </Pop>
        ))}
      </div>
    </section>
  );
};
