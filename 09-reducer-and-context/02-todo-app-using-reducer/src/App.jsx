import { useReducer } from "react";
import AddTodoForm from "./AddTodoForm";
import Todos from "./Todos";
function reducer(todos, action) {
    if (action.type === "DELETE_TODO") {
        return todos.filter((todo) => todo.id !== action.payload.id);
    }
    if (action.type === "ADD_TODO") {
        return [...todos, action.payload.newTodo];
    }
    if (action.type === "TOGGLE_COMPLETED") {
        return todos.map((todo) => {
            if (todo.id === action.payload.id) {
                return { ...todo, completed: !todo.completed };
            } else {
                return todo;
            }
        });
    }
    alert("invalid action type");
    return todos;
}

const initialTodos = [
    { id: "1", title: "teach students", completed: true },
    { id: "2", title: "edit videos", completed: false },
    { id: "3", title: "play guitar", completed: false },
];

function App() {
    const [todos, dispatch] = useReducer(reducer, initialTodos);
    return (
        <>
            <AddTodoForm dispatch={dispatch} />
            <Todos todos={todos} dispatch={dispatch} />
        </>
    );
}

export default App;
