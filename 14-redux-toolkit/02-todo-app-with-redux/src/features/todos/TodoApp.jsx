import AddTodoForm from "./AddTodoForm";
import TodosList from "./TodosList";

function TodoApp() {
    return (
        <div>
            <h1>Todo App</h1>
            <AddTodoForm />
            <TodosList />
        </div>
    );
}
export default TodoApp;
