import { useContext } from 'react';
import { TodoSearchContext } from 'context/TodoContext/';

function ToDoSearch() {
    const { setSearchValue, searchValue } = useContext(TodoSearchContext);

    return (
        <div className='searchingfilter'>
            <span>Search task:</span>
            <input
                type='text'
                placeholder='Ex: Buy 3 apple'
                value={searchValue}
                style={{ borderRadius: '0.5em', marginLeft: '1em' }}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
            ></input>
        </div>
    );
}

export { ToDoSearch };
