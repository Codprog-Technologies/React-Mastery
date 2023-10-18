import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "./todosSlice";

function SingleTodo({ todo }) {
    const dispatch = useDispatch();
    function handleDelete() {
        dispatch(deleteTodo(todo.id));
    }
    function handleToggle() {
        dispatch(toggleTodo({ id: todo.id, completed: todo.completed }));
    }
    return (
        <div
            style={{
                border: "2px solid white",
                margin: "1rem",
                padding: "1rem",
            }}
        >
            <p>id: {todo.id}</p>
            <p>title: {todo.title}</p>
            <p>completed: {todo.completed ? "completed" : "not completed"}</p>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleToggle}>toggle</button>
        </div>
    );
}
export default SingleTodo;
