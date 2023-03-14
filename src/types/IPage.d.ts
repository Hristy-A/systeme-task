import type { EntityType } from './EntityType';

export interface IPage {
  id: number;
  title: string;
  active: boolean;
  updatedAt: string;
  publishedAt: string;
  type: EntityType.Page;
}
