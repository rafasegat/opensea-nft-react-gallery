import React from 'react';
import classnames from 'classnames';
import styles from './Skeleton.module.scss';

type TypeProps = {
  width?: string;
  height?: string;
  marginBottom?: string;
  marginRight?: string;
  marginLeft?: string;
};

export const SkeletonRect = ({
  width,
  height,
  marginBottom,
  marginRight,
  marginLeft
}: TypeProps) => (
  <div
    style={{ width, height, marginBottom, marginRight, marginLeft }}
    className={styles['skeleton-rect']}
  ></div>
);
