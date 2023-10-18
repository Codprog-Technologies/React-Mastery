import { useEffect, useState } from "react";
import { fetchTodos } from "./todosSlice";
import { useDispatch, useSelector } from "react-redux";
import SingleTodo from "./SingleTodo";

function TodoList() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { data: todos } = useSelector((state) => state.todos);
    console.log(todos);
    const dispatch = useDispatch();
    useEffect(() => {
        setIsLoading(true);
        dispatch(fetchTodos())
            .unwrap()
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <h1>Loading ...</h1>;
    }
    if (error) {
        return <h1>{error.message}</h1>;
    }
    return (
        <div>
            {todos.map((todo) => (
                <SingleTodo todo={todo} key={todo.id} />
            ))}
        </div>
    );
}
export default TodoList;
