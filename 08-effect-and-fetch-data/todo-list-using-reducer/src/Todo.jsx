import React from "react";

function Todo({ id, title, completed, dispatch }) {
    const handleDelete = () => {
        console.log("Handle Delete called");
        dispatch({ type: "DELETE_TODO", payload: { id: id } });
    };
    return (
        <div
            style={{
                fontFamily: "sans-serif",
                padding: "1rem",
                margin: "1rem",
                background: "#cfcfcf",
                borderRadius: "1rem",
            }}
        >
            <h4>id: {id}</h4>
            <h4>title: {title}</h4>
            <h4>completed: {completed ? "true" : "false"}</h4>
            <button onClick={handleDelete}>Delete Todo</button>
        </div>
    );
}

export default Todo;
