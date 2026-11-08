import React from 'react';
import { inventoryGroups } from '../config/inventory';
import { InventoryGroup } from './InventoryGroup';
import { Pop } from './Pop';

export const Inventory: React.FC = () => {
  return (
    <section id="inventory" className="py-24 border-t-2 border-line">
      <Pop className="flex items-baseline gap-4 mb-12 flex-wrap">
        <h2 className="font-pixel font-normal text-[clamp(16px,2.4vw,22px)] uppercase text-text">
          <span className="text-accent">{'> '}</span>SKILLS
        </h2>
      </Pop>

      {inventoryGroups.map((group, index) => (
        <Pop key={group.label} delayMs={index * 100}>
          <InventoryGroup group={group} />
        </Pop>
      ))}
    </section>
  );
};

