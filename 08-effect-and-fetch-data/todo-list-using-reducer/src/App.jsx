import { useReducer, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import Todos from "./Todos";
const initialTodos = [
    { id: "1", title: "Teach students", completed: true },
    { id: "2", title: "Edit Videos", completed: false },
    { id: "3", title: "Play guitar", completed: false },
];

const reducer = (todos, action) => {
    // console.log("reducer function called");

    return todos;
};

function App() {
    const [todos, dispatch] = useReducer(reducer, initialTodos);
    return (
        <>
            <AddTodoForm />
            <Todos todos={todos} dispatch={dispatch} />
        </>
    );
}

export default App;
