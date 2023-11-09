import "./App.css";
import { useContext } from "react";
import {
  Header,
  CreateTodo,
  CreateTodoButton,
  ToDoFilter,
  ToDoSearch,
  ToDoList,
} from "components";
import { TodoProvider } from "provider/TodoContext/";
import { ModalContext } from "./components/Provider/Modal";
import { TodoForm } from "./components/TodoForm";

function App() {
  const { OpenModal } = useContext(ModalContext);
  return (
    <div
      className="todoapp"
      style={{ borderRadius: "20% 10%", padding: "1rem" }}
    >
      <TodoProvider>
        <Header />
        <ToDoSearch />
        <ToDoList />
        <ToDoFilter />
        {OpenModal && (
          <CreateTodo>
            <TodoForm />
          </CreateTodo>
        )}
        <CreateTodoButton />
      </TodoProvider>
    </div>
  );
}

export { App };
