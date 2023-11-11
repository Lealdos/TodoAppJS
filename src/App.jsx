import "./App.css";
import { useContext } from "react";
import {
  Header,
  CreateTodoButton,
  ToDoFilter,
  ToDoSearch,
  ToDoList,Modal
} from "components";
import { TodoProvider } from "provider/TodoContext/";
import { ModalContext } from "provider/Modal";
import { TodoForm } from "./components/TodoForm";


function App() {
  const { OpenModal } = useContext(ModalContext);
  return (
    <div
      className="todoapp"
      style={{ borderRadius: "20% 10%", padding: "0.2em",marginBottom:'0.5em'}}
    >
      <TodoProvider>
        <Header />
        <ToDoSearch />
        <ToDoList />
        <CreateTodoButton />
        {OpenModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
        <ToDoFilter />
      </TodoProvider>
    </div>
  );
}

export { App };
