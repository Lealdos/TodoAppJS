/* eslint-disable react/prop-types */
import { useContext } from 'react';
import './index.css';
import { UserContext } from '../context/Auth/authIn';
import { useTodos } from 'Hooks/useToDos';
export function TodoForm({ openForm, setOpenForm, openStatus, setOpenModal }) {
    const { AddTodo } = useTodos();
    const { createTask, user } = useContext(UserContext);
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formValues = Object.fromEntries(formData.entries());
        if (user) {
            createTask(formValues.Task);
        } else {
            AddTodo(formValues.Task);
        }
        setOpenModal(!openStatus);
        setOpenForm(!openForm);
    };

    return (
        <form className='TodoForm' onSubmit={(e) => handleFormSubmit(e)}>
            <label htmlFor='create task'> Create your new task</label>
            <textarea placeholder='Find chamba' name='Task' required></textarea>
            <button type='submit'> Create</button>
        </form>
    );
}
