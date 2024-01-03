/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const ModalContext = createContext();

export function ModalProvider({ children }) {
    const [OpenModal, setOpenModal] = useState(false);
    const [openItem, setOpenItem] = useState(false);

    return (
        <ModalContext.Provider
            value={{ OpenModal, setOpenModal, openItem, setOpenItem }}
        >
            {children}
        </ModalContext.Provider>
    );
}
