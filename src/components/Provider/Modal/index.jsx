/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [OpenModal, setOpenModal] = useState(false);
  const [openItem,setOpenItem] = useState(false)
  const handlerOpenItem = (boolean) =>{
    
    console.log('entro',boolean)
    return !boolean
  }
  return (
    <ModalContext.Provider value={{OpenModal, setOpenModal,openItem,setOpenItem ,handlerOpenItem}}>
      {children}
    </ModalContext.Provider>
  );
}
