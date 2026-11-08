import React from 'react';
import { quests } from '../config/quests';
import { QuestCard } from './QuestCard';
import { Pop } from './Pop';

export const QuestLog: React.FC = () => {
  return (
    <section id="quests" className="py-24 border-t-2 border-line">
      <Pop className="flex items-baseline gap-4 mb-12 flex-wrap">
        <h2 className="font-pixel font-normal text-[clamp(16px,2.4vw,22px)] uppercase text-text">
          <span className="text-accent">{'> '}</span>Projects
        </h2>
      </Pop>

      <div className="grid gap-6">
        {quests.map((quest, index) => (
          <Pop key={quest.id || index} delayMs={index * 120}>
            <QuestCard quest={quest} index={index} />
          </Pop>
        ))}
      </div>
    </section>
  );
};
