import { createPortal } from "react-dom";

function CreateTodo({ children }) {
    return createPortal(
      <div className="Modal">
        {children}
      </div>,
      document.getElementById('modal')
    );
  }
  
  export { CreateTodo };