export const TODOS_KEY = 'Todos_V1';


export function  getStoredTodos() {
  
    const parsedtodos = localStorage.getItem(TODOS_KEY);
    let checkParsedTodos;
    if (!parsedtodos) {
      localStorage.setItem(TODOS_KEY, JSON.stringify([]));
      checkParsedTodos = [];
      return [];
    } else {
      return (checkParsedTodos = JSON.parse(parsedtodos).sort(
        (firstTask, secondTaks) => firstTask.completed - secondTaks.completed
      ));
    }
}

export function storedTodos(todos) {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}
