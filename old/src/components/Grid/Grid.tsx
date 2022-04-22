import React from 'react';
import Skeleton from './Grid.skeleton';
import { useGlobalContext } from '../../contexts/GlobalContext';
import styles from './Grid.module.scss';

type TypeProps = {
  assets: TypeCollectionAsset[];
};

const Grid = ({ assets }: TypeProps) => {
  const { globalState } = useGlobalContext();
  const { filter } = globalState;
  const { isLoading } = globalState;

  if (isLoading && !assets)
    return (
      <div className={styles.component}>
        <Skeleton />
      </div>
    );

  const assetsFiltered = Boolean(filter.length)
    ? assets.filter((asset) => {
        return filter.some((f) => {
          const filterTraitType = JSON.parse(f.value).trait_type;
          const filterValue = JSON.parse(f.value).value;
          return asset.traits.some(
            (t) => t.trait_type === filterTraitType && t.value === filterValue
          );
        });
      })
    : assets;

  console.log(filter);
  return (
    <div className={styles.component}>
      <ul className={styles.list}>
        {assetsFiltered.map((asset: TypeCollectionAsset) => (
          <li key={asset.id} className={styles['list-item']}>
            <div className={styles['list-item-wrapper']}>
              <div className={styles['image']}>
                <img src={asset.image_url} className={styles['image-src']} />
              </div>
              <div className={styles.content}>
                <span>{asset.name}</span>
                <div style={{ fontSize: 12 }}>
                  {asset.traits
                    .map(
                      ({ trait_type, value }: any) => `${trait_type}(${value})`
                    )
                    .join(' | ')}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Grid;
