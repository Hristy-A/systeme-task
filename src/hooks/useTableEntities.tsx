import type { ColumnType, DataType } from 'components/ui/Table/Table';
import { EntityType } from 'types/EntityType';
import type { IEntity } from 'types/IEntity';

const btnStyle: React.CSSProperties = {
  background: 'var(--color-white)',
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
};

export function useTableEntities(
  entityType: EntityType,
  entities: IEntity[],
  onEdit: (id: string | number) => void
) {
  const tableEntries: DataType[] = entities.map((e) => {
    switch (e.type) {
      case EntityType.Product:
        return {
          name: <div key="name">{e.name}</div>,
          active: e.active ? 'Active' : 'Inactive',
          createdAt: new Date(Date.parse(e.createdAt)).toLocaleString(),
          edit: (
            <button
              style={btnStyle}
              key="edit"
              type="button"
              onClick={() => onEdit(e.id)}
            >
              Edit
            </button>
          ),
        } as DataType;

      case EntityType.Page:
        return {
          title: <div key="title">{e.title}</div>,
          active: e.active ? 'Active' : 'Inactive',
          publishedAt: new Date(Date.parse(e.publishedAt)).toLocaleString(),
          edit: (
            <button
              style={btnStyle}
              key="edit"
              type="button"
              onClick={() => onEdit(e.id)}
            >
              Edit
            </button>
          ),
        } as DataType;

      case EntityType.PricePlan:
        return {
          name: <div key="description">{e.description}</div>,
          active: e.active ? 'Active' : 'Inactive',
          createdAt: new Date(Date.parse(e.createdAt)).toLocaleString(),
          edit: (
            <button
              style={btnStyle}
              key="edit"
              type="button"
              onClick={() => onEdit(e.id)}
            >
              Edit
            </button>
          ),
        } as DataType;

      default:
        throw new Error('provided unknown entity type');
    }
  });

  let tableColumns: ColumnType;
  switch (entityType) {
    case EntityType.Product:
      tableColumns = [
        {
          key: 'name',
          dataIndex: 'name',
          title: 'Name',
        },
        {
          key: 'active',
          dataIndex: 'active',
          title: 'Status',
        },
        {
          key: 'createdAt',
          dataIndex: 'createdAt',
          title: 'Created',
        },
        {
          key: 'edit',
          dataIndex: 'edit',
          title: '',
        },
      ];
      break;

    case EntityType.Page:
      tableColumns = [
        {
          key: 'title',
          dataIndex: 'title',
          title: 'Title',
        },
        {
          key: 'active',
          dataIndex: 'active',
          title: 'Status',
        },
        {
          key: 'publishedAt',
          dataIndex: 'publishedAt',
          title: 'Published',
        },
        {
          key: 'edit',
          dataIndex: 'edit',
          title: '',
        },
      ];
      break;

    case EntityType.PricePlan:
      tableColumns = [
        {
          key: 'name',
          dataIndex: 'name',
          title: 'Description',
        },
        {
          key: 'active',
          dataIndex: 'active',
          title: 'Status',
        },
        {
          key: 'createdAt',
          dataIndex: 'createdAt',
          title: 'Created',
        },
        {
          key: 'edit',
          dataIndex: 'edit',
          title: '',
        },
      ];
      break;

    default:
      throw new Error('provided unknown entity type');
  }

  return { tableEntries, tableColumns };
}
