import { useState } from "react";

export const useModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [childrenOpen,setChildrenOpen] = useState(false)

  const handlerModal = () => setIsOpen(!modalIsOpen);
  const handlerChildren = () => setChildrenOpen(!childrenOpen);

  return [
    modalIsOpen,
    handlerModal,
    childrenOpen,
    handlerChildren,
  ];
};
