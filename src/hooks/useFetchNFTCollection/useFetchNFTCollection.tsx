import React, { useEffect, useState } from 'react';

const options = { method: 'GET' };

export const useFetchNFTCollection = () => {
  const [data, setData] = useState<{
    result: any;
    status: 'loading' | 'error' | 'done';
  }>({
    result: {},
    status: 'loading'
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        'https://raw.githubusercontent.com/rafasegat/crypto-whale-watcher-frontend/main/public/nft-collection.json',
        options
      );
      const json = await result.json();
      setData({
        result: json,
        status: 'done'
      });
    };
    fetchData();
  }, []);

  return data;
};
