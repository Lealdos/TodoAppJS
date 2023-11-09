import './index.css'
import { createPortal } from "react-dom";

export function CreateTodo({ children }) {
    return createPortal(
      <div className="Modal">
        {children}
      </div>,
      document.getElementById('modal')
    );
  }
  
