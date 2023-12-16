import "./App.css";
import { ToDoFilter, ToDoSearch, ToDoList, NavBar, TodoForm } from "components";
import { TodoSearchProvider } from "context/TodoContext/";
import { Modal } from "./components/context/Modal/modal";
import { useState } from "react";
import { UserProvider } from "./components/context/Auth/authIn";


function App() {
  const [openModal, setOpenModal] = useState(false);
  const [createFormOpen, setcreateFormOpen] = useState(false);
  return (
    <UserProvider>
      <NavBar />
      <div
        className="todoapp"
        style={{
          borderRadius: "20% 10%",
          padding: "0.2em",
          marginBottom: "0.5em",
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
            setOpenItem={setcreateFormOpen}
          >
            {openModal && createFormOpen && (
              <TodoForm
                openStatus={openModal}
                setOpenModal={setOpenModal}
                openForm={createFormOpen}
                setOpenForm={setcreateFormOpen}
              />
            )}
          </Modal>
        </TodoSearchProvider>
      </div>
    </UserProvider>
  );
}

export { App };
