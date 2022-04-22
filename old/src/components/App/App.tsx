import React, { useEffect } from 'react';
import Filters from '../Filters/Filters';
import Grid from '../Grid/Grid';
import { GlobalProvider, useGlobalContext } from '../../contexts/GlobalContext';
import { useFetchNFTCollection } from '../../hooks/useFetchNFTCollection/useFetchNFTCollection';
import styles from './App.module.scss';

// Generate this list and copy/paste into
// the file public/assets/data/nft-collection.json
// import { generateListNFTs } from '../../generateListNFTs';
// generateListNFTs();

const App = () => {
  const { globalState, globalDispatch } = useGlobalContext();
  const { isLoading } = globalState;
  const { status, result } = useFetchNFTCollection();

  useEffect(() => {
    if (status === 'done' && isLoading)
      globalDispatch({
        isLoading: false
      });
  }, [status, isLoading]);

  return (
    <div className={styles.component}>
      <Filters traits={result?.traits || null} />
      <Grid assets={result?.assets || null} />
    </div>
  );
};

const AppWrapped = () => (
  <GlobalProvider>
    <App />
  </GlobalProvider>
);
export default AppWrapped;
