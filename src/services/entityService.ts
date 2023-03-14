import { EntityType } from 'types/EntityType';

import pages from 'data/Pages.json';
import pricePlans from 'data/PricePlans.json';
import products from 'data/Products.json';
import type { IPage } from 'types/IPage';
import type { IPricePlan } from 'types/IPricePlan';
import type { IProduct } from 'types/IProduct';
import type { IEntity } from 'types/IEntity';
import { getContains } from 'utils/getContains';
import { convertToDtoStatus } from 'utils/convertToDtoStatus';

const contains = getContains(true);

export function fetchData(
  dataType: EntityType,
  search: string,
  status: Status
): Promise<IEntity[]> {
  const isActive = convertToDtoStatus(status);

  switch (dataType) {
    case EntityType.Page:
      return Promise.resolve(
        pages
          .filter(
            (e) =>
              contains(e.title, search) &&
              (isActive === null || e.active === isActive)
          )
          .map((x) => ({
            ...x,
            type: EntityType.Page,
          })) as IPage[]
      );
    case EntityType.PricePlan:
      return Promise.resolve(
        pricePlans
          .filter(
            (e) =>
              contains(e.description, search) &&
              (isActive === null || e.active === isActive)
          )
          .map((x) => ({
            ...x,
            type: EntityType.PricePlan,
          })) as IPricePlan[]
      );
    case EntityType.Product:
      return Promise.resolve(
        products
          .filter(
            (e) =>
              contains(e.name, search) &&
              (isActive === null || e.active === isActive)
          )
          .map((x) => ({
            ...x,
            type: EntityType.Product,
          })) as IProduct[]
      );

    default:
      return Promise.reject(new Error('Unable to resolve data type1'));
  }
}
