import React from "react";

function Todo({ completed, id, title, dispatch }) {
    const handleDelete = () => {
        dispatch({ type: "DELETE_TODO", payload: { id: id } });
    };
    const handleToggle = () => {
        dispatch({ type: "TOGGLE_COMPLETED", payload: { id: id } });
    };
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
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleToggle}>Toggle Completed</button>
        </div>
    );
}

export default Todo;
