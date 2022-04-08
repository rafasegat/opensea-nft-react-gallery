import React, { useState, ReactNode, Children } from 'react';
import classnames from 'classnames';
import IconMinus from '../Icons/IconMinus';
import IconPlus from '../Icons/IconPlus';
import styles from './Accordion.module.scss';

type TypeProps = {
  title: string;
  count?: number;
  children: ReactNode;
};

const Accordion = ({ title, count = 0, children }: TypeProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div
      className={classnames(
        styles['accordion'],
        isExpanded ? styles['is-expanded'] : styles['is-collapsed']
      )}
    >
      <h3 className={styles['accordion-title']}>
        <button
          type="button"
          className={styles['accordion-title-button']}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>
            {title}
            {Boolean(count) && <span className={styles['count']}>{count}</span>}
          </span>
          {isExpanded ? <IconMinus /> : <IconPlus />}
        </button>
      </h3>
      <div className={styles['expandable-element']}>{children}</div>
    </div>
  );
};

export default Accordion;
