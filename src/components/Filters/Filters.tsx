import React from 'react';
import Accordion from '../Accordion/Accordion';
import Checkboxes from '../Checkboxes/Checkboxes';
import FiltersSkeleton from './Filters.skeleton';
import { useGlobalContext } from '../../contexts/GlobalContext';
import styles from './Filters.module.scss';

type TypeProps = {
  collection: TypeCollection;
};

const Filters = ({ collection }: TypeProps) => {
  const { globalState, globalDispatch } = useGlobalContext();
  const { isLoading } = globalState;
  const { filter } = globalState;

  const { traits } = collection;

  return (
    <div className={styles.component}>
      <h2 className={styles.title}>Filters</h2>
      {isLoading ? (
        <FiltersSkeleton />
      ) : (
        <>
          <div className={styles['list-accordion']}>
            {Object.entries(traits).map(
              ([trait_type, traits]: [string, any]) => (
                <Accordion
                  key={trait_type}
                  title={trait_type}
                  count={Object.entries(traits).length}
                >
                  {Boolean(Object.entries(traits).length) && (
                    <Checkboxes
                      id={`${trait_type}-${Object.entries(traits).length}`}
                      value={filter}
                      options={Object.entries(traits).map(([value, count]) => ({
                        value: JSON.stringify({
                          trait_type,
                          value,
                          count
                        }),
                        label: `${value} (${count})`
                      }))}
                      onChange={(value) => {
                        globalDispatch({
                          filter: value
                        });
                      }}
                    />
                  )}
                </Accordion>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Filters;
