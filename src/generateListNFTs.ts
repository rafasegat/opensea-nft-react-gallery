import { useFetchCollection } from './hooks/useFetchCollection/useFetchCollection';
import React, { useEffect, useState } from 'react';

const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'X-API-KEY': 'e95ef47fb91e4f9988df4dd232802623'
  }
};

const COLLECTION_SLUG = 'doodles-official';
const LIMIT = 50;

const fetchData = async (nextPage: string) => {
  const result = await fetch(
    `https://api.opensea.io/api/v1/assets?collection_slug=${COLLECTION_SLUG}&order_direction=desc&limit=${LIMIT}&include_orders=false${
      nextPage && `&cursor=${nextPage}`
    }`,
    options
  );
  return await result.json();
};

const fetchCollectionData = async () => {
  const result = await fetch(
    `https://api.opensea.io/api/v1/collection/${COLLECTION_SLUG}`,
    options
  );
  const json = await result.json();
  return json;
};

export const generateListNFTs = async () => {
  // const { status, result } = useFetchCollection(COLLECTION_SLUG);

  const collectionData = await fetchCollectionData();

  const concatAssets = async (collectionTotalSupply: number) => {
    let dataAcc: any[] = [];
    let nextPage = '';
    for (let x = 0; x < collectionTotalSupply / 50; x++) {
      const { assets, next } = await fetchData(nextPage);
      nextPage = next;

      const assetFormatted = assets.map((asset: any) => ({
        id: asset.id,
        name: asset.name,
        image_url: asset.image_url,
        traits: asset.traits.map(({ trait_type, value }: any) => ({
          trait_type,
          value
        })),
        permalink: asset.permalink
      }));

      dataAcc = dataAcc.concat(assetFormatted);
    }
    return dataAcc;
  };

  const { traits } = collectionData.collection;
  const { total_supply } = collectionData.collection.stats;

  console.log(`Generating NFT collection of ${total_supply} items...`);

  const assets = await concatAssets(200); //collectionTotalSupply);

  const finalData = { traits, assets };

  console.log(
    'Here we go, copy this dataset and copy to public/data/list-assets,json'
  );
  console.log(finalData);
};
