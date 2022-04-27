import React from 'react';
import SkeletonGrid from '../Grid//Grid.skeleton';
import useInfiniteScroll from '../../hooks/useInfiniteScroll/useInfiniteScroll';

type Props = {
  page: number;
  setPage: (page: number) => void;
  hasNextPage?: boolean;
};

const LoadMore = ({ page, setPage, hasNextPage = true }: Props) => {
  const loading = false;

  const [refLoadMore] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: () => setPage(page + 1),
    rootMargin: '0px 0px 400px 0px'
  });

  return (
    <div ref={refLoadMore}>
      {hasNextPage && <SkeletonGrid showHeader={false} qtyTiles={5} />}
    </div>
  );
};

export default LoadMore;
