import React, { useEffect, useState } from 'react';

const options = { method: 'GET' };

export const useFetchNFTCollection = (collectionMetadataUrl: string) => {
  const [data, setData] = useState<{
    result: any;
    status: 'loading' | 'error' | 'done';
  }>({
    result: {},
    status: 'loading'
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(collectionMetadataUrl, options);
      const json = await result.json();
      const { name, slug, assets } = json;
      if (!name || !slug || !assets.length) {
        setData({
          result: [],
          status: 'error'
        });
        return;
      }

      setData({
        result: json,
        status: 'done'
      });
    };
    fetchData();
  }, []);

  return data;
};
