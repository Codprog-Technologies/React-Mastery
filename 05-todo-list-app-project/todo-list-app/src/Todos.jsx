import React from "react";
import Todo from "./Todo";
function Todos({ todos, toggleCompleted, removeTodo }) {
    return (
        <div>
            {todos.map((todo) => (
                <Todo
                    {...todo}
                    key={todo.id}
                    toggleCompleted={toggleCompleted}
                    removeTodo={removeTodo}
                />
            ))}
        </div>
    );
}

export default Todos;
