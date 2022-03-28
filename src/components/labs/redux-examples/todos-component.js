import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const Todos = () => {
    const todos = useSelector(state => state.todoReducer);
    const [todo, setTodo] = useState({do: '', done: false});
    const dispatch = useDispatch();
    const updateTodoClickListener = (todo) => {
         const action = {
             type: 'update-todo',
             todo
         };
         dispatch(action);
    }
    const deleteTodoClickHandler = (todo) => {
        const action = {
            type: 'delete-todo',
            todo
        };
        dispatch(action);
    };
    const createTodoClickHandler = () => {
        const action = {
            type: 'create-todo',
            todo
        };
        dispatch(action);
    };
    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newToDo = {
            do: doValue
        };
        setTodo(newToDo);
    };
    return (
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <input onChange={todoChangeHandler} value={todo.do} className="form-control"/>
                    <button onClick={createTodoClickHandler} className="btn btn-primary">Create new todo
                    </button>

                </li>
                {
                    todos.map(todo =>
                        <li className="list-group-item">
                            <input checked={todo.done} onChange={(event) => {updateTodoClickListener({...todo, done: event.target.checked})}} type="checkbox">
                            </input>{todo.do}
                            <button onClick={() => {deleteTodoClickHandler(todo)}} className="btn btn-danger float-end">Delete</button>
                        </li>
                    )
                }
            </ul>
        </>
    );
};
export default Todos;