import React, { createContext, useContext, useReducer, useEffect } from "react";
import ShoppingReducer from "../reducers/ShoppingReducer";

const Context = createContext();

const Provider = ({ children }) => {
  const globalState = localStorage.getItem("GlobalState");

  const initialState = globalState
    ? JSON.parse(globalState)
    : {
        token: "",
        products: [],
        cartProducts: [],
      };

  const [state, dispatch] = useReducer(ShoppingReducer, initialState);

  useEffect(() => {
    localStorage.setItem("GlobalState", JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

// Custom Hook
export const useShoppingContext = () => useContext(Context);

export default Provider;
