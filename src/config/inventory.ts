export interface InventoryItem {
  readonly name: string;
  readonly category: string;
}

export interface InventoryGroup {
  readonly label: string;
  readonly items: readonly InventoryItem[];
}

export const inventoryGroups: readonly InventoryGroup[] = [
  {
    label: 'Languages',
    items: [
      { name: 'JavaScript', category: 'lang' },
      { name: 'TypeScript', category: 'lang' },
      { name: 'Java', category: 'lang' },
      { name: 'Python', category: 'lang' },
      { name: 'SQL', category: 'lang' },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'React.js', category: 'lib' },
      { name: 'React 19', category: 'lib' },
      { name: 'Next.js', category: 'framework' },
      { name: 'Vite', category: 'tool' },
      { name: 'Tailwind CSS', category: 'css' },
      { name: 'HTML', category: 'markup' },
      { name: 'CSS', category: 'style' },
      { name: 'TanStack React Query', category: 'state' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js', category: 'runtime' },
      { name: 'Express.js', category: 'server' },
      { name: 'REST APIs', category: 'api' },
    ],
  },
  {
    label: 'Databases',
    items: [
      { name: 'MongoDB', category: 'db' },
      { name: 'MongoDB Atlas', category: 'cloud' },
      { name: 'Mongoose', category: 'odm' },
      { name: 'MySQL', category: 'sql' },
    ],
  },
  {
    label: 'Tools',
    items: [
      { name: 'Git', category: 'vcs' },
      { name: 'GitHub', category: 'host' },
      { name: 'Bitbucket', category: 'vcs' },
      { name: 'Postman', category: 'api' },
      { name: 'Swagger', category: 'docs' },
    ],
  },
];
