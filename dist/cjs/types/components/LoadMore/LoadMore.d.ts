/// <reference types="react" />
declare type Props = {
    page: number;
    setPage: (page: number) => void;
    hasNextPage?: boolean;
};
declare const LoadMore: ({ page, setPage, hasNextPage }: Props) => JSX.Element;
export default LoadMore;
