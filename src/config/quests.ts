import { projects, Project, ProjectStatus } from './projects';

export type QuestStatus = ProjectStatus;
export type Quest = Project;
export const quests: readonly Quest[] = projects;
