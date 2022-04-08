import React from 'react';
import classnames from 'classnames';
import styles from './Skeleton.module.scss';

type TypeProps = {
  width?: string;
  height?: string;
  marginBottom?: string;
};

export const SkeletonRect = ({ width, height, marginBottom }: TypeProps) => (
  <div
    style={{ width, height, marginBottom }}
    className={styles['skeleton-rect']}
  ></div>
);
