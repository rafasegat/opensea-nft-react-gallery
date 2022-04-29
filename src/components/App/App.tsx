import React, { useEffect } from 'react';
import Filters from '../Filters/Filters';
import Grid from '../Grid/Grid';
import { GlobalProvider, useGlobalContext } from '../../contexts/GlobalContext';
import { useFetchNFTCollection } from '../../hooks/useFetchNFTCollection/useFetchNFTCollection';

// styles
import '../../assets/styles/global.scss';
import styles from './App.module.scss';

export interface AppProps {
  collectionMetadataUrl: string;
}

const App = ({ collectionMetadataUrl }: AppProps) => {
  const { globalState, globalDispatch } = useGlobalContext();
  const { isLoading } = globalState;
  const { status, result: collection } = useFetchNFTCollection(
    collectionMetadataUrl
  );

  useEffect(() => {
    if (status === 'done' && isLoading)
      globalDispatch({
        isLoading: false
      });
  }, [status, isLoading]);

  if (status === 'error') {
    <div>Something went wrong. Check your URL.</div>;
  }

  return (
    <div className={styles.component}>
      <Filters collection={collection} />
      <Grid collection={collection} />
    </div>
  );
};

const AppWrapped = ({ collectionMetadataUrl }: AppProps) =>
  collectionMetadataUrl ? (
    <GlobalProvider>
      <App collectionMetadataUrl={collectionMetadataUrl} />
    </GlobalProvider>
  ) : (
    <div>
      Please, provide a Collection Metadata URL. You can generate it{' '}
      <a
        href="https://opensea-nft-json-generator-frontend.vercel.app/"
        target="_blank"
      >
        here
      </a>
      .
    </div>
  );

export default AppWrapped;
