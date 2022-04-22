import React, { useEffect, useState } from 'react';

const options = { method: 'GET' };

export const useFetchCollection = (collectionSlug: string) => {
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
        `https://api.opensea.io/api/v1/collection/${collectionSlug}`,
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
