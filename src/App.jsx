import "./App.css";
import { ToDoFilter, ToDoSearch, ToDoList, NavBar, TodoForm } from "components";
import { TodoProvider } from "provider/TodoContext/";
import { Modal } from "./components/Provider/Modal/modal";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [createFormOpen, setcreateFormOpen] = useState(false);
  return (
    <>
      <NavBar />
      <div
        className="todoapp"
        style={{
          borderRadius: "20% 10%",
          padding: "0.2em",
          marginBottom: "0.5em",
        }}
      >
        <TodoProvider>
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
        </TodoProvider>
      </div>
    </>
  );
}

export { App };
