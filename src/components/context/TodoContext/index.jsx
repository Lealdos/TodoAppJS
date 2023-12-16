/* eslint-disable react/prop-types */
import { createContext,useState } from "react";

export const TodoSearchContext = createContext();

export function TodoSearchProvider({ children }) {
  const [searchValue, setSearchValue] = useState('');
  const [todos,setTodos]= useState([])
  return (
    <TodoSearchContext.Provider value={{ setSearchValue, searchValue,todos,setTodos }}>
      {children}
    </TodoSearchContext.Provider>
  );
}
