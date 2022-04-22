import React from 'react';
declare type GlobalContextState = {
    isLoading: boolean;
    filter: TypeValueLabel[];
};
declare type TypeAction = {
    type: 'setIsLoading' | 'setFilter';
    payload: any;
};
export declare const reducer: (state: GlobalContextState, action: TypeAction) => {
    isLoading: any;
    filter: TypeValueLabel[];
} | {
    filter: any;
    isLoading: boolean;
};
export declare const GlobalContext: React.Context<[GlobalContextState, (value: TypeAction) => void]>;
export declare const GlobalProvider: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
export declare const useGlobalContext: () => {
    globalState: GlobalContextState;
    globalDispatch: (value: TypeAction) => void;
};
export {};
