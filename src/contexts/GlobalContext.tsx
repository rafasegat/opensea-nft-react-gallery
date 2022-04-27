import React, { createContext, Reducer, useContext, useReducer } from 'react';

type GlobalContextState = {
  isLoading: boolean;
  filter: TypeValueLabel[];
};

const initialState: GlobalContextState = {
  isLoading: true,
  filter: []
};

export const GlobalContext = createContext<
  [GlobalContextState, (value: Partial<GlobalContextState>) => void]
>([initialState, () => {}]);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer<
    Reducer<GlobalContextState, Partial<GlobalContextState>>
  >((prevState, newState) => ({ ...prevState, ...newState }), initialState);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const [state, dispatch] = useContext(GlobalContext);
  return {
    globalState: state,
    globalDispatch: (value: Partial<GlobalContextState>) => dispatch(value)
  };
};
