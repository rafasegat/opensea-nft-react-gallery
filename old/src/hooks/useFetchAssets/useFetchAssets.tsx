import React, { useEffect, useState } from 'react';

const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'X-API-KEY': 'e95ef47fb91e4f9988df4dd232802623'
  }
};

export const useFetchAssets = () => {
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
        'https://api.opensea.io/api/v1/assets?collection_slug=doodles-official&order_direction=desc&limit=50&include_orders=false',
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
