import "./App.css";
import { ToDoFilter, ToDoSearch, ToDoList, NavBar,TodoForm } from "components";
import { TodoProvider } from "provider/TodoContext/";
import { ModalProvider } from "./components/Provider/Modal";
import { Modal } from "./components/Provider/Modal/modal";
import { useModal } from "./assets/Hooks/useModal";

function App() {
  const [openModal, setopenModal, createFormOpen, setcreateFormOpen] =
    useModal();
  return (
    <ModalProvider>
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
            setOpenModal={setopenModal}
            openItem={createFormOpen}
            setOpenItem={setcreateFormOpen}
          >
            {openModal && createFormOpen && (
              <TodoForm
                openStatus={openModal}
                setOpenModal={setopenModal}
                openForm={createFormOpen}
                setOpenForm={setcreateFormOpen}
              />
            )}
          </Modal>
        </TodoProvider>
      </div>
    </ModalProvider>
  );
}

export { App };
