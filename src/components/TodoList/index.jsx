/* eslint-disable react/prop-types */
import { ToDoItem } from 'components/TodoItem';
import { useTodos } from 'assets/Hooks';
import { Loader } from 'components/Loader';
import './index.css';
import { useContext } from 'react';
import { TodoSearchContext } from 'context/TodoContext/';

function ToDoList() {
    const { searchValue } = useContext(TodoSearchContext);
    const { completeToDoHandler, handleRemove, todos, isLoading } = useTodos();
    const allTodos = todos || [];
    const completedTodos = allTodos.filter((Todo) => !!Todo.completed).length;
    const totalTodos = allTodos.length;
    const searchedTodos = allTodos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLocaleLowerCase();
        return todoText.includes(searchText);
    });

    const sortedSearchedTodos = searchedTodos.sort(
        (firstTask, secondTask) => firstTask.completed - secondTask.completed
    );

    const checkNoTask =
        !isLoading && searchedTodos.length === 0 && searchValue.length < 1;
    const checkNoFound =
        !isLoading && searchedTodos.length === 0 && searchValue.length > 0;
    return (
        <ul className='todo-list'>
            <h2>
                Task done <span>{completedTodos}</span> of{' '}
                <span>{totalTodos}</span>
            </h2>
            <br />
            {(checkNoTask && <h2>Create your first task</h2>) ||
                (checkNoFound && <h2>Task no found </h2>)}
            {isLoading ? (
                <Loader />
            ) : (
                sortedSearchedTodos.map((ToDo) => {
                    return (
                        <li
                            key={ToDo.id}
                            className={`
            ${ToDo.completed ? 'completed' : ''}
           
          `}
                        >
                            <ToDoItem
                                key={ToDo.id}
                                id={ToDo.id}
                                completed={ToDo.completed}
                                text={ToDo.text}
                                onCompleted={() => completeToDoHandler(ToDo.id)}
                                handleRemove={() => handleRemove(ToDo.id)}
                            />
                        </li>
                    );
                })
            )}
        </ul>
    );
}

export { ToDoList };
