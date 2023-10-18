import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./features/counter/counterSlice";
function App() {
    const { count, username } = useSelector((state) => {
        return state.counter;
    });
    const dispatch = useDispatch();
    return (
        <>
            <h1>Hello, {username}</h1>
            <h2>count : {count}</h2>
            <button
                onClick={() => {
                    dispatch(increment());
                }}
            >
                Increase
            </button>
            <button
                onClick={() => {
                    dispatch(reset());
                }}
            >
                Reset
            </button>
            <button
                onClick={() => {
                    dispatch(decrement());
                }}
            >
                Decrease
            </button>
        </>
    );
}

export default App;
