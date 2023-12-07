/* eslint-disable react/prop-types */
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ModalContext } from "../Provider/Modal";
import { useContext } from "react";
import {Modal} from 'components'
import "./index.css";

export function CreateTodoButton({active}) {
  const { OpenModal, setOpenModal,openItem,setOpenItem } = useContext(ModalContext);
  
  return (
    <div className="allbutton">
      <span>

      {OpenModal? 'Esc' : 'Add task'}
      </span>

      <button
        className="CreateTodoButton"
        style={{ cursor: "pointer", fontSize: "2.5em" }}
        onClick={() => {setOpenModal(!OpenModal); setOpenItem(!openItem)}}
      >
        <AiOutlinePlusCircle />
      </button>
      {OpenModal && openItem  && (
          <Modal>
              {active}  
          </Modal>
        )}
    </div>
  );
}
