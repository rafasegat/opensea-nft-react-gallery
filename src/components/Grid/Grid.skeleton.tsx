import React from 'react';
import ListAssetsSkeleton from '../ListAssets/ListAssets.skeleton';
import styles from './Grid.module.scss';
import { SkeletonRect } from '../Skeleton/Skeleton';

type Props = {
  showHeader?: boolean;
  qtyTiles?: number;
};

const GridSkeleton = ({ showHeader = true, qtyTiles = 25 }: Props) => {
  return (
    <div>
      {Boolean(showHeader) && (
        <SkeletonRect width="16rem" height="2.5rem" marginBottom="1rem" />
      )}
      <ListAssetsSkeleton qtyTiles={qtyTiles} />
    </div>
  );
};

export default GridSkeleton;
