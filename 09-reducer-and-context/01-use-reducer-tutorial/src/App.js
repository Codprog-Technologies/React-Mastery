import { useReducer } from "react";
import "./App.css";

// useReducer
// useReducer()
// return [state,dispatch]

// as an argument

// 1. reducer function
// 2. intialState

// dispatch function
// we pass object (action) as an argument

// reducer
// 1 state,
// 2  action

function reducer(state, action) {
    console.log(state, action);
    if (action.type === "INCREMENT") {
        return { ...state, count: state.count + 1 };
    }
    if (action.type === "RESET") {
        return { ...state, count: 0 };
    }
    if (action.type === "DECREMENT") {
        return { ...state, count: state.count - 1 };
    }
    return state;
}

const intialState = { count: 0, firstName: "harshit" };

function App() {
    // const [state, setState] = useState({ count: 0 });

    const [state, dispatch] = useReducer(reducer, intialState);

    const handleIncrease = () => {
        dispatch({
            type: "INCREMENT",
        });
    };

    const handleReset = () => {
        dispatch({
            type: "RESET",
        });
    };

    const handleDecrease = () => {
        dispatch({ type: "DECREMENT" });
    };
    return (
        <div className="App">
            <h1>useReducer Tutorial</h1>
            <hr />
            <h2> Hello {state.firstName}</h2>
            <h2>{state.count}</h2>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    );
}

export default App;
