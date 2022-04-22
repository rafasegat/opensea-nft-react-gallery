import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import styles from './ListAssets.module.scss';

type Props = {
  assets: TypeCollectionAsset[];
};

const ListAssets = ({ assets }: Props) => {
  return (
    <ul id="list-assets" className={classnames(styles.component)}>
      {assets.map((asset: TypeCollectionAsset) => (
        <li key={asset.id} className={styles['list-item']}>
          <a
            href={asset.permalink}
            target="_blank"
            className={styles['list-item-link']}
          >
            <div className={styles['list-item-wrapper']}>
              <div className={styles['image']}>
                {/* <img src={asset.image_url} className={styles['image-src']} /> */}
                <img src="cdscds" className={styles['image-src']} />
              </div>
              <div className={styles.content}>
                <span>{asset.name}</span>
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ListAssets;
