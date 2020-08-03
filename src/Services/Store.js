import React, { createContext, useReducer } from "react";
// voor nu even true!!
const initialState = { images: [] };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "authed":
        return Object.assign({}, state, { authed: action.payload });
      case "user":
        return Object.assign({}, state, { user: action.payload });
      case "images":
        return Object.assign({}, state, { images: action.payload });
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
