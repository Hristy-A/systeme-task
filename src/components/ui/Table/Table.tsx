import type { Key } from 'react';

import styles from './Table.module.scss';

export type ColumnType = Array<{
  key: Key;
  dataIndex: string;
  title: string;
}>;

export type DataType = {
  [key: string]: string | number | JSX.Element;
};

type TableProps = {
  columns: ColumnType;
  data: DataType[];
  getKey: (data: DataType) => Key;
};

const Table = ({ columns, data, getKey }: TableProps) => {
  console.log();

  return (
    <table className={styles.table}>
      <thead className={styles.table__title}>
        <tr>
          {columns.map((column) => (
            <th>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.table__content}>
        {data.map((dataEntry) => (
          <tr key={getKey(dataEntry)}>
            {columns.map(({ key, dataIndex }) => (
              <td key={key}>{dataEntry[dataIndex]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
