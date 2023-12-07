import "./index.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { createPortal } from "react-dom";

export function Modal({
  children,
  openStatus ,
  openItem ,
  setOpenModal,
  setOpenItem,
}) {
  const handlerOpenItem = () => {
    setOpenModal(!openStatus);
    setOpenItem(!openItem);
  };
  return createPortal(
    <div>
      <div className="allbutton">
        <span>{openStatus ? "ESC" : "Add task"}</span>
        <button
          className="CreateTodoButton"
          style={{ cursor: "pointer", fontSize: "2.5em" }}
          onClick={() => {
            handlerOpenItem();
          }}
        >
          <AiOutlinePlusCircle />
        </button>
        {openStatus && <div className="Modal">{children}</div> }
      </div>
    </div>,
    document.getElementById("modal")
  );
}
