import { useState } from "react";

function Counter() {
    console.log("component rendered");
    const [counter, setCounter] = useState(0);
    function handleIncrease() {
        // setCounter(counter + 1);
        // setCounter((previousState) => {
        //     return previousState + 1;
        // });
        setCounter((previousState) => previousState + 1);
    }
    function handleReset() {
        setCounter(0);
    }
    function handleDecrease() {
        // setCounter(counter - 1);
        // setCounter((previousState) => {
        //     return previousState - 1;
        // });
        setCounter((prevState) => prevState - 1);
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    );
}

export default Counter;
