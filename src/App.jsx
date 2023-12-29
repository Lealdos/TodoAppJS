
import './App.css';
import { useState, useContext, useEffect } from 'react';
import { ToDoFilter, ToDoSearch, ToDoList, NavBar, TodoForm } from 'components';
import { TodoSearchProvider } from 'context/TodoContext/';
import { Modal } from './components/context/Modal/modal';
import { UserContext } from './components/context/Auth/authIn';
import { supabase } from 'supabaseClient/client';

function App() {
    const [openModal, setOpenModal] = useState(false);
    const [createFormOpen, setCreateFormOpen] = useState(false);
    const {getTasks, setUser, setProfile } = useContext(UserContext);

    useEffect(() => {
        const {data }= supabase.auth.onAuthStateChange((event, session) => {
            if (event == 'SIGNED_IN' || session) {
                setUser((prev)=> prev ||session?.user);
                getTasks();
                setProfile(session?.user);
            }

        });
        return ()=>data.subscription.unsubscribe()

    }, [getTasks,setUser,setProfile]);

    return (
        <>
            <NavBar  />
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
