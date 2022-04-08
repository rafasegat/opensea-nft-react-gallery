import React from 'react';
import Filters from '../Filters/Filters';
import Grid from '../Grid/Grid';
import { useFetchCollection } from '../../hooks/useFetchCollection/useFetchCollection';
import { GlobalProvider, useGlobalContext } from '../../contexts/GlobalContext';
import styles from './App.module.scss';

const App = () => {
  const { globalState, globalDispatch } = useGlobalContext();
  const { isLoading } = globalState;
  const { status, result } = useFetchCollection();

  if (status === 'done' && isLoading)
    globalDispatch({
      isLoading: false
    });

  let traits = null;
  if (result) traits = result?.collection?.traits;

  return (
    <div className={styles.component}>
      <Filters traits={traits} />
      <Grid />
    </div>
  );
};

const AppWrapped = () => (
  <GlobalProvider>
    <App />
  </GlobalProvider>
);
export default AppWrapped;
