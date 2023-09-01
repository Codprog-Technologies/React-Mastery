import { createContext, useContext, useReducer } from "react";

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
const TodosContext = createContext();
function TodosProvider({ children }) {
    const [todos, dispatch] = useReducer(reducer, initialTodos);
    const handleDelete = (id) => {
        dispatch({ type: "DELETE_TODO", payload: { id: id } });
    };
    const handleToggle = (id) => {
        dispatch({ type: "TOGGLE_COMPLETED", payload: { id: id } });
    };
    const addNewTodo = (newTodo) => {
        dispatch({ type: "ADD_TODO", payload: { newTodo: newTodo } });
    };
    return (
        <TodosContext.Provider
            value={{ todos, handleDelete, handleToggle, addNewTodo }}
        >
            {children}
        </TodosContext.Provider>
    );
}

export function useTodos() {
    return useContext(TodosContext);
}

export default TodosProvider;
