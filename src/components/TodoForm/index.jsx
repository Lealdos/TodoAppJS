/* eslint-disable react/prop-types */

import './index.css';

import { useTodos } from 'Hooks/useToDos';
export function TodoForm({ openForm, setOpenForm, openStatus, setOpenModal }) {
    const { AddTodo } = useTodos();
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formValues = Object.fromEntries(formData.entries());
        console.log(formValues.Task);
        AddTodo(formValues.Task);
        setOpenModal(!openStatus);
        setOpenForm(!openForm);
    };

    return (
        <form className='TodoForm' onSubmit={(e) => handleFormSubmit(e)}>
            <label> Create your new task</label>
            <textarea placeholder='Find chamba' name='Task' required></textarea>
            <button type='submit'> Create</button>
        </form>
    );
}
