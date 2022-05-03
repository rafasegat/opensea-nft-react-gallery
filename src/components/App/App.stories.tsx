import React from 'react';
import App from './App';

export default {
  component: App,
  title: 'components/OpenSea NFT React Gallery'
};

export const Default = () => (
  <App collectionMetadataUrl="https://raw.githubusercontent.com/rafasegat/crypto-whale-watcher-frontend/main/public/nft-collection.json" />
);
