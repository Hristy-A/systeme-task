import { useEffect, useState } from 'react';
import type { EntityType } from 'types/EntityType';
import * as entityService from 'services/entityService';
import type { IEntity } from 'types/IEntity';

export function useEntities(
  entityType: EntityType,
  search: string,
  status: Status
) {
  const [entities, setEntities] = useState<IEntity[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      setEntities(await entityService.fetchData(entityType, search, status));
      setLoading(false);
    })();
  }, [entityType, search, status]);

  return { entities, setEntities, loading };
}
