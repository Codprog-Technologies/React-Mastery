import { useState } from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// lifting the state up

function App() {
    const [todos, setTodos] = useState([
        { id: 1, title: "Learn Guitar", completed: false },
        { id: 2, title: "Learn React", completed: true },
        { id: 3, title: "Find Good watlz in Am", completed: false },
    ]);
    const addTodo = (newTodo) => {
        setTodos((prevState) => [...prevState, newTodo]);
    };
    const removeTodo = (id) => {
        setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
    };
    const toggleCompleted = (id) => {
        setTodos((prevState) => {
            return prevState.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            });
        });
    };
    return (
        <div className="container">
            <ToastContainer />
            <h1 className="main-title">Todo List</h1>
            <TodoForm addTodo={addTodo} />
            <Todos
                todos={todos}
                toggleCompleted={toggleCompleted}
                removeTodo={removeTodo}
            />
        </div>
    );
}

export default App;
