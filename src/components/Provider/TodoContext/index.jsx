/* eslint-disable react/prop-types */
import { createContext,useState } from "react";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [searchValue, setSearchValue] = useState('');
  const [todos,setTodos]= useState([])
  return (
    <TodoContext.Provider value={{ setSearchValue, searchValue,todos,setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}
