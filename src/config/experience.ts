export interface ExperienceEntry {
  readonly id: string;
  readonly role: string;
  readonly company: string;
  readonly dates: string;
  readonly bullets: readonly string[];
}

export const experiences: readonly ExperienceEntry[] = [
  {
    id: 'EXP 01',
    role: 'Full Stack Developer Intern',
    company: 'Pixonix Software Technology',
    dates: 'May 2026 – Present',
    bullets: [
      'Contributed to AivaHR, a production HRMS platform, building features with React, Next.js, TypeScript, JavaScript, HTML, and CSS.',
      'Independently built the employee resignation and separation workflow end to end, including frontend interfaces, workflow logic, and REST API integrations.',
      'Integrated REST APIs, debugged frontend-backend issues, and performed manual testing to validate application functionality.',
    ],
  },
];

