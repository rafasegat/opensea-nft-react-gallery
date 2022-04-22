import React from 'react';
import Accordion from '../Accordion/Accordion';
import Checkboxes from '../Checkboxes/Checkboxes';
import { useGlobalContext } from '../../contexts/GlobalContext';
import styles from './Filters.module.scss';

type TypeProps = {
  traits: TypeCollectionTrait;
};

const Filters = ({ traits }: TypeProps) => {
  const { globalState, globalDispatch } = useGlobalContext();
  const { isLoading } = globalState;
  const { filter } = globalState;

  return (
    <div className={styles.component}>
      <h2>Filters</h2>
      {isLoading ? (
        'Loading filters...'
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
          {Boolean(filter.length) && (
            <div>
              <h4>Filters selected:</h4>
              <ul className={styles['filters-selected-list']}>
                {filter.map(({ value, label }) => {
                  const parsed = JSON.parse(value);
                  const labelF = `${parsed.trait_type.toUpperCase()} ${label} `;
                  return <li>{labelF}</li>;
                })}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Filters;
