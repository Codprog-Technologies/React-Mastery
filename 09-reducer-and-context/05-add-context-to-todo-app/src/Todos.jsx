import Todo from "./Todo";

import { useTodos } from "./contexts/TodosProvider";
function Todos() {
    const { todos } = useTodos();
    return (
        <div>
            {todos.map((todo) => (
                <Todo {...todo} key={todo.id} />
            ))}
        </div>
    );
}

export default Todos;
