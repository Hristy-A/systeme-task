import type { Option } from 'components/ui/Select/Select';
import Select from 'components/ui/Select/Select';
import React from 'react';
import { EntityType } from 'types/EntityType';

type EntityTypeSelectProps = {
  entityType: EntityType;
  setEntityType: React.Dispatch<React.SetStateAction<EntityType>>;
};

const options: Option[] = Object.values(EntityType).map((entityName) => ({
  title: entityName,
  value: entityName,
}));

const EntityTypeSelect = ({
  entityType,
  setEntityType,
}: EntityTypeSelectProps) => (
  <Select
    options={options}
    value={entityType}
    onChange={({ target }) => setEntityType(target.value as EntityType)}
  />
);

export default EntityTypeSelect;
