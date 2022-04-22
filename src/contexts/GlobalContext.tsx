import React, { createContext, useContext, useReducer } from 'react';

type GlobalContextState = {
  isLoading: boolean;
  filter: TypeValueLabel[];
};

type TypeAction = {
  type: 'setIsLoading' | 'setFilter';
  payload: any;
};

const initialState: GlobalContextState = {
  isLoading: true,
  filter: []
};

export const reducer = (state: GlobalContextState, action: TypeAction) => {
  console.log(state);
  switch (action.type) {
    case 'setIsLoading':
      return {
        ...state,
        isLoading: action.payload
      };
    case 'setFilter':
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
    // throw new Error('State action not found.');
  }
};

export const GlobalContext = createContext<
  [GlobalContextState, (value: TypeAction) => void]
>([initialState, () => {}]);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  // const [state, dispatch] = useReducer<
  //   Reducer<GlobalContextState, Partial<GlobalContextState>>
  // >((prevState, newState) => ({ ...prevState, ...newState }), initialState);
  // console.log(useReducer, reducer, initialState);
  // console.log(
  //   'useReducer(reducer, initialState)',
  //   useReducer(reducer, initialState)
  // );
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const [state, dispatch] = useContext(GlobalContext);
  console.log('useGlobalContext');
  return {
    globalState: state,
    globalDispatch: (value: TypeAction) => dispatch(value)
  };
};
