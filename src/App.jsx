import './App.css';
import { ToDoFilter, ToDoSearch, ToDoList, NavBar, TodoForm } from 'components';
import { TodoSearchProvider } from 'context/TodoContext/';
import { Modal } from './components/context/Modal/modal';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from 'context/Auth/authIn';

function App() {
    const [openModal, setOpenModal] = useState(false);
    const [createFormOpen, setCreateFormOpen] = useState(false);
    const { user } = useContext(UserContext);

    useEffect(() => {}, [user]);
    return (
        <>
            <NavBar />
            <div
                className='todoapp'
                style={{
                    borderRadius: '20% 10%',
                    padding: '0.2em',
                    marginBottom: '0.5em',
                }}
            >
                <TodoSearchProvider>
                    <h1>Task List</h1>
                    <ToDoSearch on />
                    <ToDoList />
                    <ToDoFilter />

                    <Modal
                        openStatus={openModal}
                        setOpenModal={setOpenModal}
                        openItem={createFormOpen}
                        setOpenItem={setCreateFormOpen}
                    >
                        {openModal && createFormOpen && (
                            <TodoForm
                                openStatus={openModal}
                                setOpenModal={setOpenModal}
                                openForm={createFormOpen}
                                setOpenForm={setCreateFormOpen}
                            />
                        )}
                    </Modal>
                </TodoSearchProvider>
            </div>
        </>
    );
}

export { App };
