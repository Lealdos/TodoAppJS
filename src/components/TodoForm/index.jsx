import { useContext } from "react";
import { ModalContext } from 'provider/Modal';
import './index.css'
export function TodoForm  ()  {
    const { OpenModal, setOpenModal } = useContext(ModalContext);
    const HandlerSubmit = (event) => {
        event.preventDefault()
        setOpenModal(!OpenModal)
        
    }

    return (
        
            <form action="put" className="TodoForm" onSubmit={(e)=>HandlerSubmit(e)}>
                <label htmlFor=""> Create your nex task</label>
                <textarea placeholder='Find chamba' name="Task" ></textarea>
                <button  type='submit'> Create</button>
            </form>
        
    )
}