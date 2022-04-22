import React from 'react';
import styles from './ListAssets.module.scss';
import { SkeletonRect } from '../Skeleton/Skeleton';

type Props = {
  qtyTiles?: number;
};

const ListAssetsSkeleton = ({ qtyTiles = 25 }: Props) => {
  return (
    <div>
      <ul className={styles.component}>
        {[...Array(qtyTiles)].map((item, index) => (
          <li key={index} className={styles['list-item']}>
            <div className={styles['list-item-wrapper']}>
              <div className={styles['image']}>
                <SkeletonRect height="100%" marginBottom="10px" />
              </div>
              <div className={styles.content}>
                <SkeletonRect
                  width="3.5rem"
                  height="0.85rem"
                  marginBottom="10px"
                />
                <SkeletonRect width="2rem" height="0.85rem" marginBottom="0" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListAssetsSkeleton;
