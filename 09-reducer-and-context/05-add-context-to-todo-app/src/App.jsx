import AddTodoForm from "./AddTodoForm";
import Todos from "./Todos";
import TodoProvider from "./contexts/TodosProvider";

function App() {
    return (
        <TodoProvider>
            <AddTodoForm />
            <Todos />
        </TodoProvider>
    );
}

export default App;
