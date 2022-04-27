import React from 'react';
import styles from './Filters.module.scss';
import { SkeletonRect } from '../Skeleton/Skeleton';

const FiltersSkeleton = () => {
  return (
    <div className={styles['component-skeleton']}>
      <ul className={styles['list-skeleton']}>
        {[...Array(6)].map((item, index) => (
          <li key={index} className={styles['list-item-skeleton']}>
            <SkeletonRect
              width="5rem"
              height="0.85rem"
              marginBottom="0"
              marginLeft="1rem"
            />
            <SkeletonRect
              width="1rem"
              height="0.85rem"
              marginBottom="0"
              marginRight="1rem"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FiltersSkeleton;
