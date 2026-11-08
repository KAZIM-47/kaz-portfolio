export interface CertificationItem {
  readonly id: string;
  readonly title: string;
  readonly issuer: string;
  readonly year: string;
}

export const certifications: readonly CertificationItem[] = [
  {
    id: 'CERT 01',
    title: 'Web Development Bootcamp',
    issuer: 'CodeHelp',
    year: '2026',
  },
  {
    id: 'CERT 02',
    title: 'Artificial Intelligence (AI) for Management',
    issuer: 'IIT Madras',
    year: '2026',
  },
];

