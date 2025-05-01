export type ClearanceLevel = 'TOP_SECRET' | 'SECRET' | 'DECLASSIFIED';

export interface Project {
  id: string;
  codename: string;
  clearanceLevel: ClearanceLevel;
  description: string;
  shortDescription: string;
  status: string;
  progress: number;
  createdAt: string;
  updatedAt: string;
  testPilotCount?: number;
  publicDetails?: {
    name: string;
    website?: string;
    pricing?: string;
  };
}
