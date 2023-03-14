import Button from 'components/ui/Button/Button';
import Input from 'components/ui/Input/Input';
import type { ChangeEvent } from 'react';
import { useState } from 'react';

import styles from './EditEntity.module.scss';

type Entry = [string, string];

export type TextFields = {
  id: string | number;
  entries: Entry[];
};

type EditEntityProps = {
  textFieldsInit: TextFields | null;
  onSave: (textFields: TextFields) => void;
};

const EditEntity = ({ textFieldsInit, onSave }: EditEntityProps) => {
  if (textFieldsInit === null) throw new Error('text fields unprovided');

  const [changed, setChanged] = useState(false);
  const [textFields, setTextFields] = useState<TextFields>(textFieldsInit);

  const handleChangeTextFields = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    setChanged(true);
    setTextFields((p) => ({
      ...p,
      entries: p.entries.map((t) =>
        t[0] === target.name ? [t[0], target.value] : t
      ),
    }));
  };

  return (
    <div className={styles.editEntity}>
      {textFields.entries.map((entry) => (
        <div>
          <div className={styles.propertyName}>{entry[0]}</div>
          <Input
            type="text"
            name={entry[0]}
            value={entry[1]}
            onChange={handleChangeTextFields}
          />
        </div>
      ))}
      <div className={styles.saveSection}>
        <Button disabled={!changed} onClick={() => onSave(textFields)}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditEntity;
