import React from 'react';

import closeIcon from 'assets/icons/close.svg';
import styles from './Select.module.scss';

export type Option = {
  value: string;
  title: string;
  disabled?: boolean;
};

type SelectProps = {
  options: Option[];
  resettable?: boolean;
  onReset?: () => void;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  value?: string;
};

const Select = ({
  onChange,
  value,
  options,
  resettable,
  onReset,
}: SelectProps) => (
  <div className={styles.selectContainer}>
    <select onChange={onChange} value={value}>
      {options.map((option) => (
        <option value={option.value} disabled={option.disabled}>
          {option.title}
        </option>
      ))}
    </select>
    {resettable && (
      <button type="button" onClick={onReset}>
        <img src={closeIcon} alt="close" />
      </button>
    )}
  </div>
);

export default Select;
