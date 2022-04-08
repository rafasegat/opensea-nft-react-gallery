import React from 'react';
import Skeleton from './Grid.skeleton';
import { useGlobalContext } from '../../contexts/GlobalContext';
import styles from './Grid.module.scss';

const Grid = () => {
  const { globalState } = useGlobalContext();
  const { isLoading } = globalState;

  if (!isLoading)
    return (
      <div className={styles.component}>
        <Skeleton />
      </div>
    );

  return <div className={styles.component}>Grid</div>;
};

export default Grid;
