import React, { useReducer, createContext } from "react";
import { AppReducer } from './AppReducer';

const initialState = {
  theme: localStorage.getItem('theme') || 'theme-dark',
};

export const GlobalContext = createContext(initialState);

export function GlobalProvider({children}) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const changeTheme = () => {
    const res = state.theme === 'theme-light' ? 'theme-dark' : 'theme-light';
    localStorage.setItem('theme', res);
    dispatch({
      type:'CHANGE_THEME',
      payload: res,
    })
  }

  return (
    <GlobalContext.Provider
    value={{
      theme: state.theme,
      changeTheme,
    }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
