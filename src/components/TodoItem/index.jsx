/* eslint-disable react/prop-types */
function ToDoItem(props) {
    const { completed, text, onCompleted, handleRemove } = props;
    return (
        <div className='view'>
            <input
                className='toggle'
                checked={completed}
                type='checkbox'
                onChange={onCompleted}
            />
            <label htmlFor='completed' onClick={onCompleted}>
                {text}
            </label>

            <button className='destroy' onClick={handleRemove}></button>
        </div>
    );
}

export { ToDoItem };
