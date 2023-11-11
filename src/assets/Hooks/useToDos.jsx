/* eslint-disable no-unused-vars */
import { useState,useEffect,useContext } from 'react';
import {
  getStoredTodos,
  storedTodos,
} from 'assets/utils/KeepTodosPersiten';
import { TodoContext } from '../../components/Provider/TodoContext';


export function useTodos() {
  const {todos,setTodos}=useContext(TodoContext)
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
        }, 500);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
  
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const AddTodo = (task,details=null) => {
    console.log(todos.length)
    const prueba = {id: todos.length+1, text:task,completed:false }
    
    const newTodos = [...todos,prueba];
    saveTodosLocalStorage(newTodos);
    setTodos(newTodos)
    console.log(todos)
  }
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
    handleRemove,AddTodo,
    saveTodosLocalStorage,
    isLoading
  };
}
