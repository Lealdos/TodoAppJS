/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from 'react';
import { getStoredTodos, storedTodos } from 'assets/utils/KeepTodosPersistent';
import { TodoSearchContext } from 'context/TodoContext';

export function useTodos() {
    const { todos, setTodos } = useContext(TodoSearchContext);
    const [isLoading, setIsLoading] = useState(true);
    const [adding, setAdding] = useState(false);
    const saveTodosLocalStorage = (newTodos) => {
        storedTodos(newTodos);
        setTodos(newTodos);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setTimeout(async () => {
                    const storedTodos = await getStoredTodos();
                    setIsLoading(!isLoading);
                    setTodos(storedTodos);
                }, 500);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const AddTodo = (task, details = null) => {
        const newTask = {
            id: crypto.randomUUID(),
            text: task,
            completed: false,
        };
        const newTodos = [...todos, newTask];
        saveTodosLocalStorage(newTodos);
    };

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
        AddTodo,
        saveTodosLocalStorage,
        isLoading,
        adding,
        setAdding,
    };
}
