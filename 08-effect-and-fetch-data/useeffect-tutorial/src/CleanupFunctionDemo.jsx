import { useEffect, useState } from "react";

// cleanup function

// 1 : before component unmount

//2 : when there is some value inside dependency array

// when value changes
// 1 . component re-render
// 2. cleanup function
// 3. useEffect runs

function CleanupFunctionDemo() {
    console.log("component rendered");
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        console.log("effect callback");
        return function () {
            console.log("cleanup function");
        };
    }, [counter]);

    return (
        <div>
            <h1>counter: {counter}</h1>
            <button onClick={() => setCounter((prevValue) => prevValue + 1)}>
                Increase
            </button>
        </div>
    );
}

export default CleanupFunctionDemo;
