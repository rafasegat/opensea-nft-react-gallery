import React, { useEffect } from 'react';
import Filters from '../Filters/Filters';
import Grid from '../Grid/Grid';
import { GlobalProvider, useGlobalContext } from '../../contexts/GlobalContext';
import { useFetchNFTCollection } from '../../hooks/useFetchNFTCollection/useFetchNFTCollection';

// styles
import '../../assets/styles/global.scss';
import styles from './App.module.scss';

export interface AppProps {
  url: string;
}

const App = (props: AppProps) => {
  const { globalState, globalDispatch } = useGlobalContext();
  const { isLoading } = globalState;
  const { status, result: collection } = useFetchNFTCollection();
  console.log(props);
  useEffect(() => {
    if (status === 'done' && isLoading)
      globalDispatch({
        isLoading: false
      });
  }, [status, isLoading]);

  return (
    <div className={styles.component}>
      <Filters collection={collection} />
      <Grid collection={collection} />
    </div>
  );
};

const AppWrapped = (props: any) => (
  <GlobalProvider>
    csdcds
    <App {...props} />
  </GlobalProvider>
);

export default AppWrapped;
