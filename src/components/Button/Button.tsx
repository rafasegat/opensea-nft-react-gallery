import React, { ReactNode } from 'react';
import styles from './Button.module.scss';

type Props = {
  children: ReactNode;
  onClick: VoidFunction;
};

const Button = ({ children, onClick }: Props) => {
  return (
    <button type="button" className={styles.component} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
