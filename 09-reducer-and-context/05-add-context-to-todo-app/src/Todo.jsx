import { useTodos } from "./contexts/TodosProvider";

function Todo({ completed, id, title }) {
    const { handleDelete, handleToggle } = useTodos();

    return (
        <div
            style={{
                fontFamily: "sans-serif",
                padding: "1rem",
                margin: "1rem",
                backgroundColor: "#cecece",
                borderRadius: "1rem",
            }}
        >
            <h4>id: {id}</h4>
            <h4
                style={{
                    textDecoration: completed ? "line-through" : "solid",
                }}
            >
                title: {title}
            </h4>
            <h4>completed: {completed ? "true" : "false"}</h4>
            <button
                onClick={() => {
                    handleDelete(id);
                }}
            >
                Delete
            </button>
            <button
                onClick={() => {
                    handleToggle(id);
                }}
            >
                Toggle Completed
            </button>
        </div>
    );
}

export default Todo;
