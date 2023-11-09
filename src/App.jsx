import "./App.css";
import { useContext } from "react";
import {
  Header,
  CreateTodo,
  CreateTodoButtom,
  ToDoFilter,
  ToDoSearch,
  ToDoList,
} from "components";
import { TodoProvider } from "provider/TodoContext/";
import { ModalContext } from "./components/Provider/Modal";


function App() {
  const {OpenModal}= useContext(ModalContext)
  return (
    <div
      className="todoapp"
      style={{ borderRadius: "20% 10%", padding: "1rem" }}
    >
      <TodoProvider>
        <Header />
        <ToDoSearch />
        <CreateTodoButtom />
        <ToDoList />
        <ToDoFilter />
        { OpenModal &&
            <CreateTodo>leo</CreateTodo>
        }
      </TodoProvider>
    </div>
  );
}

export { App };
