import { AiOutlinePlusCircle } from "react-icons/ai";
import { ModalContext } from "../Provider/Modal";
import { useContext } from "react";
import "./index.css";
export function CreateTodoButton() {
  const { OpenModal, setOpenModal } = useContext(ModalContext);
  return (
    <div className="allbutton">
      {OpenModal? 'Esc' : 'Add task'}
      <button
        className="CreateTodoButton"
        style={{ cursor: "pointer", fontSize: "2em" }}
        onClick={() => setOpenModal(!OpenModal)}
      >
        <AiOutlinePlusCircle />
      </button>
    </div>
  );
}
