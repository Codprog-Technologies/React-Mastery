/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { removeTodo, toggleCompleted } from "./todosSlice";
function SingleTodo({ id, title, completed }) {
    const dispatch = useDispatch();
    return (
        <div className="m-1 p-1 b-2">
            <p>id: {id}</p>
            <p className={`${completed ? "strike" : null}`}>title: {title}</p>
            <p>completed: {completed ? "true" : "false"}</p>
            <button
                onClick={() => {
                    dispatch(removeTodo({ id: id }));
                }}
            >
                Delete
            </button>
            <button onClick={() => dispatch(toggleCompleted({ id: id }))}>
                Toggle Completed
            </button>
        </div>
    );
}
export default SingleTodo;
