import { AiOutlinePlusCircle } from "react-icons/ai";
import { ModalContext } from "../Provider/Modal";
import { useContext } from "react";

export function CreateTodoButtom() {
  const { OpenModal, setOpenModal } = useContext(ModalContext);
  return (
    <>
      <button
        style={{ cursor: "pointer", fontSize: "3rem" }}
        onClick={() => setOpenModal(!OpenModal)}
      >
        <AiOutlinePlusCircle />
      </button>
    </>
  );
}
