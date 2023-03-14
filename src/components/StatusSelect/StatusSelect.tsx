import type { ChangeEvent } from 'react';
import { useState } from 'react';
import type { Option } from '../ui/Select/Select';
import Select from '../ui/Select/Select';

type SelectProps = {
  statusChange: (status: Status) => void;
};

const options: Option[] = [
  { title: '', value: '', disabled: true },
  { title: 'Active', value: 'active' },
  { title: 'Inactive', value: 'inactive' },
];

const StatusSelect = ({ statusChange }: SelectProps) => {
  const [status, setStatus] = useState<Status>('');

  const resetStatus = () => {
    setStatus('');
    statusChange('');
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value as Status);
    statusChange(event.target.value as Status);
  };

  return (
    <Select
      options={options}
      value={status}
      onChange={handleChange}
      onReset={resetStatus}
      resettable
    />
  );
};

export default StatusSelect;
