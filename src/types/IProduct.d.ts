import type { EntityType } from './EntityType';

export interface IProduct {
  id: number;
  name: string;
  active: boolean;
  createdAt: string;
  type: EntityType.Product;
}
