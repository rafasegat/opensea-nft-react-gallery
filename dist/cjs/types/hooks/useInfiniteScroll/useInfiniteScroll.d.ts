import { IntersectionObserverHookArgs, IntersectionObserverHookRefCallback as UseInfiniteScrollHookRefCallback, IntersectionObserverHookRootRefCallback as UseInfiniteScrollHookRootRefCallback } from 'react-intersection-observer-hook';
export { UseInfiniteScrollHookRefCallback, UseInfiniteScrollHookRootRefCallback };
export declare type UseInfiniteScrollHookResult = [
    UseInfiniteScrollHookRefCallback,
    {
        rootRef: UseInfiniteScrollHookRootRefCallback;
    }
];
export declare type UseInfiniteScrollHookArgs = Pick<IntersectionObserverHookArgs, 'rootMargin'> & {
    loading: boolean;
    hasNextPage: boolean;
    onLoadMore: VoidFunction;
    disabled?: boolean;
    delayInMs?: number;
};
declare const useInfiniteScroll: ({ loading, hasNextPage, onLoadMore, rootMargin, disabled, delayInMs }: UseInfiniteScrollHookArgs) => UseInfiniteScrollHookResult;
export default useInfiniteScroll;
