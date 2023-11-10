import { useContext } from "react";
import { TodoContext } from "provider/TodoContext/";

function ToDoSearch() {
  const {setSearchValue, searchValue } = useContext(TodoContext)
  return (
    <div className="searchingfilter">
      <span>Search task:</span>
      <input
        className="pepito"
        type="text"
        placeholder="Ex: Buy 3 apple"
        value={searchValue}
        style={{borderRadius:'0.5em', marginLeft:'1em'}}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      ></input>
    </div>
  );
}

export { ToDoSearch };
