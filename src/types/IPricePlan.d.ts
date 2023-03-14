import type { EntityType } from './EntityType';

export interface IPricePlan {
  id: number;
  description: string;
  active: boolean;
  createdAt: string;
  removedAt: string;
  type: EntityType.PricePlan;
}
