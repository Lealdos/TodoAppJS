import { useState,useEffect } from 'react';
import {
  getStoredTodos,
  storedTodos,
} from 'assets/utils/KeepTodosPersiten';

export function useTodos() {
  const [todos, setTodos] = useState([])
  const [searchValue, setSearchValue] = useState('');
  const [isLoading,setIsLoading] = useState(true)
  const saveTodosLocalStorage = (newTodos) => {
    storedTodos(newTodos);
    setTodos(newTodos);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        setTimeout(async () => {
          const storedTodos = await getStoredTodos();
          setIsLoading(!isLoading)
          setTodos(storedTodos);
        }, 2000);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
  
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const completeToDoHandler = (id) => {
    const newTodos = [...todos];
    const todosIndex = newTodos.findIndex((todos) => todos.id === id);
    newTodos[todosIndex].completed = !newTodos[todosIndex].completed;
    saveTodosLocalStorage(newTodos);
  };
  const handleRemove = (id) => {
    const newTodos = [...todos];
    const newTodoList = newTodos.filter((todo) => todo.id !== id);
    saveTodosLocalStorage(newTodoList);
  };

  return {
    todos,
    completeToDoHandler,
    handleRemove,
    saveTodosLocalStorage,
    searchValue,
    setSearchValue,
    isLoading
  };
}
