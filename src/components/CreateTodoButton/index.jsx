import { AiOutlinePlusCircle } from "react-icons/ai";
import { ModalContext } from "../Provider/Modal";
import { useContext } from "react";
import "./index.css";
export function CreateTodoButton() {
  const { OpenModal, setOpenModal } = useContext(ModalContext);
  return (
    <div className="allbutton">
      <p>

      {OpenModal? 'Esc' : 'Add task'}
      </p>
      <button
        className="CreateTodoButton"
        style={{ cursor: "pointer", fontSize: "2.5em" }}
        onClick={() => setOpenModal(!OpenModal)}
      >
        <AiOutlinePlusCircle />
      </button>
    </div>
  );
}
