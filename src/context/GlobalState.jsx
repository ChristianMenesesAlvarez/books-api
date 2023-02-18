import React, { useReducer, createContext } from "react";
import { AppReducer } from './AppReducer';

const initialState = {
  users: ["pepe"]
};

export const GlobalContext = createContext(initialState);

export function GlobalProvider({children}) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getUsers = async () => {
    const res = {
      username: 'paco',
      password: '1234'
    };
    dispatch({
      type:'GET_USERS',
      payload: res,
    })
  }

  return (
    <GlobalContext.Provider
    value={{
      users: state.users,
      getUsers,
    }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
