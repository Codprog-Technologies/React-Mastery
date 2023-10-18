import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todosSlice";

function TodoForm() {
    const [title, setTitle] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        dispatch(addTodo(title))
            .unwrap()
            .then(() => {
                setTitle("");
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit" disabled={isLoading}>
                {isLoading ? "adding ..." : "add"}
            </button>
        </form>
    );
}
export default TodoForm;
