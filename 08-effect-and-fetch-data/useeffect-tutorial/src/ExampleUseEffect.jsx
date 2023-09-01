import { useEffect, useState } from "react";

// useState

// useEffect
// fetch data from api
// eventListeners
// sideEffect

// useEffect
// it takes callback function as input

// useEffect

// first argument : callback function
// second argument: dependency array

// dependency array
// [] ---> useEffect will be called only once
// dependency array with some value

function ExampleUseEffect() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    console.log("Component Rendered");
    useEffect(() => {
        console.log("Inside UseEffect");
    }, [counter1]);

    return (
        <div>
            <h1>counter1: {counter1}</h1>
            <button onClick={() => setCounter1((prevValue) => prevValue + 1)}>
                Increase
            </button>
            <h1>counter2: {counter2}</h1>
            <button onClick={() => setCounter2((prevValue) => prevValue + 1)}>
                Increase
            </button>
        </div>
    );
}

export default ExampleUseEffect;
