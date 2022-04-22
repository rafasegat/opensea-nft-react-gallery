import React from 'react';
import { useGlobalContext } from '../../contexts/GlobalContext';
import styles from './FiltersSelectionRemoval.module.scss';

const FiltersSelectionRemoval = () => {
  const { globalState, globalDispatch } = useGlobalContext();
  const { filter } = globalState;

  return (
    <div className={styles['component']}>
      <h3 className={styles['title']}>FILTERS ({filter.length})</h3>
      {Boolean(filter.length) && (
        <ul className={styles['list']}>
          {filter.map(({ value, label }) => {
            const parsed = JSON.parse(value);
            const labelF = `${parsed.trait_type}: ${[parsed.value]} `;
            return (
              <li className={styles['list-item']}>
                <button
                  type="button"
                  className={styles['btn-item']}
                  onClick={() => {
                    globalDispatch({
                      type: 'setFilter',
                      payload: filter.filter((f) => f.value !== value)
                    });
                    // globalDispatch({
                    //   filter: filter.filter((f) => f.value !== value)
                    // });
                  }}
                >
                  <span>{labelF}</span>
                  <svg stroke="currentColor" fill="none" viewBox="0 0 8 8">
                    <path
                      stroke-linecap="round"
                      stroke-width="1.5"
                      d="M1 1l6 6m0-6L1 7"
                    ></path>
                  </svg>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FiltersSelectionRemoval;
