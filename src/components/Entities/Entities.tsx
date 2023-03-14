import { useState } from 'react';
import Button from 'components/ui/Button/Button';
import Input from 'components/ui/Input/Input';
import StatusSelect from 'components/StatusSelect/StatusSelect';
import Table from 'components/ui/Table/Table';
import Modal from 'components/ui/Modal/Modal';
import { useEntities } from 'hooks/useEntities';
import { useFilter } from 'hooks/useFilter';
import { EntityType } from 'types/EntityType';
import { useModal } from 'hooks/useModal';
import EditEntity from 'components/EditEntity/EditEntity';
import { useEditEntity } from 'hooks/useEditEntity';
import { useTableEntities } from 'hooks/useTableEntities';
import EntityTypeSelect from 'components/EntityTypeSelect/EntityTypeSelect';

import Container from 'components/ui/Container/Container';
import styles from './Entities.module.scss';

const Entities = () => {
  const [entityType, setEntityType] = useState<EntityType>(EntityType.Product);
  const { search, searchChange, status, statusChange, isChanged, apply } =
    useFilter('', '');
  const { entities, setEntities, loading } = useEntities(
    entityType,
    search,
    status
  );
  const { modalVisible, open, close } = useModal();
  const { editedEntity, handleEdit, handleSave } = useEditEntity(
    entities,
    setEntities,
    open,
    close
  );
  const { tableEntries, tableColumns } = useTableEntities(
    entityType,
    entities,
    handleEdit
  );

  return (
    <Container>
      {modalVisible && (
        <Modal onClickOutside={close} onClose={close}>
          <EditEntity textFieldsInit={editedEntity} onSave={handleSave} />
        </Modal>
      )}
      <div className={styles.header}>
        <EntityTypeSelect
          entityType={entityType}
          setEntityType={setEntityType}
        />
        <Input onChange={({ target }) => searchChange(target.value)} />
        <StatusSelect statusChange={statusChange} />
        <Button type="button" onClick={apply} disabled={!isChanged}>
          Filter
        </Button>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Table
          columns={tableColumns}
          data={tableEntries}
          getKey={(data) => data.id as unknown as string | number}
        />
      )}
    </Container>
  );
};

export default Entities;
