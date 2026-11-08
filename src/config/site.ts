export interface SiteConfig {
  readonly title: string;
  readonly name: {
    readonly first: string;
    readonly accent: string;
    readonly last?: string;
  };
  readonly playerLabel: string;
  readonly role: string;
  readonly lede: string;
  readonly location: string;
  readonly availability: string;
  readonly email: string;
  readonly github: string;
  readonly linkedin: string;
  readonly resume: {
    readonly label: string;
    readonly href: string;
    readonly filename: string;
  };
  readonly contact: {
    readonly accessKey: string;
    readonly recipientEmail: string;
  };
  readonly footer: {
    readonly copyright: string;
    readonly coinText: string;
  };
}

export const siteConfig: SiteConfig = {
  title: 'KAZ — Fullstack Developer',
  name: {
    first: 'Mohammad',
    accent: 'Kazim',
  },
  playerLabel: 'Player 1 · Maharashtra, India',
  role: 'fullstack developer',
  lede: 'MERN stack developer with hands-on experience building production web applications using React, Next.js, Node.js, Express.js, MongoDB, and TypeScript.',
  location: 'Maharashtra, India',
  availability: 'Available from September 2026.',
  email: 'mohammadkazimgoher@gmail.com',
  github: 'https://github.com/KAZIM-47',
  linkedin: 'https://www.linkedin.com/in/mohammadkazim47',
  resume: {
    label: 'Resume',
    href: '/resume.pdf',
    filename: 'KAZ-Resume.pdf',
  },
  contact: {
    accessKey: 'REPLACE_WITH_WEB3FORMS_KEY',
    recipientEmail: 'mohammadkazimgoher@gmail.com',
  },
  footer: {
    copyright: '© KAZ',
    coinText: 'Insert coin · Maharashtra, IN',
  },
};

export const resume = siteConfig.resume;

