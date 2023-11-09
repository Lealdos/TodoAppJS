/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useTodos } from "assets/Hooks/";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const { setSearchValue, searchValue } = useTodos();
  return (
    <TodoContext.Provider value={{ setSearchValue, searchValue }}>
      {children}
    </TodoContext.Provider>
  );
}
