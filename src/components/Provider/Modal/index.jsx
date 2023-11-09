/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [OpenModal, setOpenModal] = useState(false);
  return (
    <ModalContext.Provider value={{OpenModal, setOpenModal }}>
      
      {children}
    </ModalContext.Provider>
  );
}
