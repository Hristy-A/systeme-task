import type { FC, PropsWithChildren, DetailedHTMLProps } from 'react';

import styles from './Button.module.scss';

type ButtonProps = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, ...props }) => (
  <button
    type="button"
    className={`${styles.button} ${
      props.disabled ? styles.button_disabled : ''
    }`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
