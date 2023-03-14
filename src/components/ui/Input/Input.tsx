import type { InputHTMLAttributes } from 'react';

import styles from './Input.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...props }: Props) => (
  <input {...props} className={`${styles.searchInput} ${className ?? ''}`} />
);

export default Input;
