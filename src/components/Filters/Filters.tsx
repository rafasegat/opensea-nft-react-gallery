import React from 'react';
import Accordion from '../Accordion/Accordion';
import Checkboxes from '../Checkboxes/Checkboxes';
import { useGlobalContext } from '../../contexts/GlobalContext';
import styles from './Filters.module.scss';

type TypeProps = {
  traits: any;
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
        <div className={styles['list-accordion']}>
          {Object.entries(traits).map(([name, traits]: [string, any]) => (
            <Accordion
              key={name}
              title={name}
              count={Object.entries(traits).length}
            >
              {Boolean(Object.entries(traits).length) && (
                <Checkboxes
                  id={`${name}-${Object.entries(traits).length}`}
                  value={filter}
                  options={Object.entries(traits).map(
                    ([itemName, itemCount]) => ({
                      value: `trait_${name}_${itemName}_${itemCount}`,
                      label: `${itemName} (${itemCount})`
                    })
                  )}
                  onChange={(value) => {
                    globalDispatch({
                      filter: value
                    });
                  }}
                />
              )}
            </Accordion>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filters;
