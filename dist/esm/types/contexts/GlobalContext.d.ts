import React from 'react';
declare type GlobalContextState = {
    isLoading: boolean;
    filter: TypeValueLabel[];
};
export declare const GlobalContext: React.Context<[GlobalContextState, (value: Partial<GlobalContextState>) => void]>;
export declare const GlobalProvider: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
export declare const useGlobalContext: () => {
    globalState: GlobalContextState;
    globalDispatch: (value: Partial<GlobalContextState>) => void;
};
export {};
