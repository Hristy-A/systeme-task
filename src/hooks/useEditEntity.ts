import type { TextFields } from 'components/EditEntity/EditEntity';
import { useCallback, useState } from 'react';
import { EntityType } from 'types/EntityType';
import type { IEntity } from 'types/IEntity';

export function useEditEntity(
  entities: IEntity[],
  setEntities: React.Dispatch<React.SetStateAction<IEntity[]>>,
  onEdit: () => void,
  onSave: () => void
) {
  const [editedEntity, setEditedEntity] = useState<TextFields | null>(null);

  const handleEdit = (id: number | string) => {
    const entity = entities.find((e) => e.id === id);

    if (entity === null) throw new Error('provided id not found');

    switch (entity?.type) {
      case EntityType.Product:
        setEditedEntity({
          id,
          entries: [['name', entity.name]],
        });
        break;

      case EntityType.Page:
        setEditedEntity({
          id,
          entries: [['title', entity.title]],
        });
        break;

      case EntityType.PricePlan:
        setEditedEntity({
          id,
          entries: [['description', entity.description]],
        });
        break;

      default:
        throw new Error('provided unknown entity type');
    }

    onEdit();
  };

  const handleSave = useCallback(
    (textFields: TextFields) => {
      setEntities((p) =>
        p.map((entity) => {
          if (entity.id !== textFields.id) return entity;

          return {
            ...entity,
            ...Object.fromEntries(textFields.entries),
          };
        })
      );
      onSave();
    },
    [setEntities, onSave]
  );

  return { editedEntity, handleEdit, handleSave };
}
