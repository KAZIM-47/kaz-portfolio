import React from 'react';
import { Quest } from '../config/quests';

export interface QuestCardProps {
  quest: Quest;
  index?: number;
}

export const QuestCard: React.FC<QuestCardProps> = ({ quest, index }) => {
  const [imageError, setImageError] = React.useState(false);

  const isProgress = quest.status === 'active';
  const isComplete = quest.status === 'complete';
  const isPresent = quest.status === 'present';
  const statusLabel = isPresent
    ? 'Present'
    : isComplete
    ? 'Complete'
    : isProgress
    ? 'In progress'
    : 'In dev';

  const isAccentBadge = isPresent || isComplete || isProgress;

  const projectLabel =
    index !== undefined
      ? `PROJECT ${String(index + 1).padStart(2, '0')}`
      : quest.id.startsWith('PROJECT')
      ? quest.id
      : quest.id.replace('QUEST', 'PROJECT');

  const cardClasses =
    'group bg-panel border-2 border-line p-7 flex flex-col transition-[transform,box-shadow,border-color] duration-120 ease-[steps(2)] hover:border-accent hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_var(--accent)]';

  const cardContent = (
    <>
      <div className="flex justify-between items-start gap-4 mb-3.5">
        <div>
          <div className="font-pixel text-[10px] text-muted uppercase tracking-normal mb-3.5">
            {projectLabel}
          </div>
          <h3 className="font-pixel font-normal text-[clamp(14px,2vw,18px)] leading-[1.5] uppercase text-text">
            {quest.title}
          </h3>
        </div>

        <div
          className={`font-pixel text-[10px] uppercase tracking-normal py-2 px-2.5 whitespace-nowrap border-2 self-start shrink-0 ${
            isAccentBadge ? 'border-accent text-accent' : 'border-muted text-muted'
          }`}
        >
          {statusLabel}
        </div>
      </div>

      {quest.image && !imageError && (
        <div className="relative mb-4 w-full aspect-video overflow-hidden border-2 border-[#1f2b23] shadow-[4px_4px_0_#050505]">
          <img
            src={quest.image.src}
            alt={quest.image.alt}
            width={1024}
            height={576}
            loading="lazy"
            decoding="async"
            onError={() => setImageError(true)}
            className="card-screenshot block w-full h-full object-cover"
            style={{ width: '100%', display: 'block' }}
          />
          {/* Scanline overlay */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to bottom, rgba(0,0,0,0) 0 2px, rgba(0,0,0,0.18) 2px 3px)',
            }}
          />
          {/* Bottom fade overlay */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-[30%]"
            style={{
              background: 'linear-gradient(to bottom, transparent, #07090c)',
            }}
          />
        </div>
      )}

      <p className="font-body text-[20px] tablet:text-[24px] leading-[1.3] text-[#b8b8b0] max-w-[620px]">
        {quest.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {quest.tags.map((tag) => (
          <span
            key={tag}
            className="font-body text-[20px] leading-tight border border-line px-2 text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  if (quest.url) {
    const defaultAriaLabel = quest.title.toLowerCase().includes('aivahr')
      ? 'View AivaHR live site (opens in a new tab)'
      : quest.title.toLowerCase().includes('studynotion')
      ? 'View StudyNotion live site (opens in a new tab)'
      : `View ${quest.title} live site (opens in a new tab)`;

    return (
      <a
        href={quest.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={quest.ariaLabel || defaultAriaLabel}
        className={`block ${cardClasses} cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
      >
        {cardContent}
      </a>
    );
  }

  return <article className={cardClasses}>{cardContent}</article>;
};
