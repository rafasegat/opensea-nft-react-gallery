import React, { useEffect, useState } from 'react';
import AnimatedNumbers from 'react-animated-numbers';
import ListAssets from '../../components/ListAssets/ListAssets';
import LoadMore from '../../components/LoadMore/LoadMore';
import FiltersSelectionRemoval from '../../components/FiltersSelectionRemoval/FiltersSelectionRemoval';
import Skeleton from './Grid.skeleton';
import IconReset from '../Icons/IconReset';
import Button from '../Button/Button';
import { useGlobalContext } from '../../contexts/GlobalContext';
import styles from './Grid.module.scss';

const QTY_TILES = 10;

type TypeProps = {
  collection: TypeCollection;
};

const Grid = ({ collection }: TypeProps) => {
  const [page, setPage] = useState(1);
  const { globalState, globalDispatch } = useGlobalContext();
  const { filter } = globalState;
  const { isLoading } = globalState;

  const { assets } = collection;

  useEffect(() => {
    // blink animation
    const elList = document.getElementById('list-assets');
    elList?.classList.add('blink-me');

    setTimeout(() => {
      const elList2 = document.getElementById('list-assets');
      elList2?.classList.remove('blink-me');
    }, 1600);

    // reset pagination
    setPage(1);
  }, [filter]);

  if (isLoading && !assets)
    return (
      <div className={styles.component}>
        <Skeleton />
      </div>
    );

  const filterAssets = (assets: TypeCollectionAsset[]) => {
    if (!Boolean(filter.length)) return assets;
    return assets.filter((asset) => {
      return filter.some((f) => {
        const filterTraitType = JSON.parse(f.value).trait_type;
        const filterValue = JSON.parse(f.value).value;
        return asset.traits.some(
          (t) => t.trait_type === filterTraitType && t.value === filterValue
        );
      });
    });
  };

  const assetsFiltered = filterAssets(assets);
  const assetsFilteredAndSliced = assetsFiltered.slice(0, QTY_TILES * page);

  return (
    <div className={styles.component}>
      <div className={styles.header}>
        <div className={styles['header-title']}>
          <h2 className={styles.title}>{collection.name}</h2>
          <span className={styles['title-divider']}>//</span>
          <AnimatedNumbers
            animateToNumber={assetsFiltered.length}
            fontStyle={{ fontSize: 32 }}
          ></AnimatedNumbers>
        </div>
        <div>
          <Button
            onClick={() => {
              globalDispatch({
                filter: []
              });
            }}
          >
            <span>RESET</span>
            <IconReset />
          </Button>
        </div>
      </div>

      <FiltersSelectionRemoval />

      <ListAssets assets={assetsFilteredAndSliced} />

      <LoadMore
        page={page}
        setPage={(page: number) => setPage(page)}
        hasNextPage={assetsFilteredAndSliced.length < assetsFiltered.length}
      />
    </div>
  );
};

export default Grid;
