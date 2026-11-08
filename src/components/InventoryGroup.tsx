import React from 'react';
import { InventoryGroup as InventoryGroupType } from '../config/inventory';

export interface InventoryGroupProps {
  group: InventoryGroupType;
}

export const InventoryGroup: React.FC<InventoryGroupProps> = ({ group }) => {
  return (
    <div className="mb-9 last:mb-0">
      <h3 className="font-pixel font-normal text-[11px] uppercase tracking-normal text-muted mb-3.5">
        {group.label}
      </h3>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3">
        {group.items.map((item) => (
          <div
            key={item.name}
            className="group bg-panel border-2 border-line py-4 px-[18px] flex justify-between items-center gap-3 transition-[border-color,color] duration-120 ease-[steps(2)] hover:border-accent hover:text-accent"
          >
            <span className="font-body text-[26px] leading-none transition-colors duration-120 ease-[steps(2)]">
              {item.name}
            </span>
            <span className="font-pixel text-[9px] uppercase tracking-normal text-muted transition-colors duration-120 ease-[steps(2)] group-hover:text-accent">
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

