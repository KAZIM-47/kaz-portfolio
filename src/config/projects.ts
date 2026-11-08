export type ProjectStatus = 'active' | 'dev' | 'complete' | 'present';

export interface ProjectImage {
  readonly src: string;
  readonly alt: string;
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly status: ProjectStatus;
  readonly url?: string;
  readonly ariaLabel?: string;
  readonly image?: {
    readonly src: string;
    readonly alt: string;
  };
}

export const projects: readonly Project[] = [
  {
    id: 'PROJECT 01',
    title: 'AivaHR — HRMS Platform',
    description:
      'Production HRMS (human resource management) platform. Contributed features using React, Next.js, TypeScript, JavaScript, HTML, and CSS. Independently built the employee resignation and separation workflow end to end, including frontend interfaces, workflow logic, and REST API integrations.',
    tags: ['React', 'Next.js', 'TypeScript', 'REST APIs'],
    status: 'present',
    url: 'https://aivahr.ai/',
    ariaLabel: 'View AivaHR live site (opens in a new tab)',
    image: {
      src: '/projects/aivahr.png',
      alt: 'AivaHR HRMS platform screenshot',
    },
  },
  {
    id: 'PROJECT 02',
    title: 'StudyNotion – Full-Stack E-Learning Platform',
    description:
      'An e-learning platform where students browse, purchase, and enroll in courses. Includes JWT authentication, email OTP verification with Nodemailer, REST APIs for courses, users, ratings, and enrollments, and Razorpay Test Mode payments with server-side signature verification.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'JWT', 'Razorpay'],
    status: 'complete',
    url: 'https://studynotion-edtech-project-main-ten.vercel.app/',
    ariaLabel: 'View StudyNotion live site (opens in a new tab)',
    image: {
      src: '/projects/studynotion.png',
      alt: 'StudyNotion e-learning platform screenshot',
    },
  },
  {
    id: 'PROJECT 03',
    title: 'Draft Arena – Tactical Anime Draft & Battle Game',
    description:
      'A turn-based 1v1 drafting game with a 10-pick snake draft and three character candidates per turn. Includes a CPU drafting algorithm with four difficulty levels (Easy, Normal, Hard, Expert) and a battle simulation engine using five combat attributes: Taijutsu, Hax, Tactics, Speed Blitz, and Endurance. Backed by REST APIs and MongoDB for dynamic character and universe management.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
    status: 'complete',
  },
];
