import { useState } from "react";
import ShowCountValue from "./ShowCountValue";

// async state update

// photo click
// current count : 0
// increase by 1

// current count : 0
// increase by 1

// current count : 0
// increase by 1

// props are immutable

function Counter() {
    const [count, setCount] = useState(0);
    function handleIncrease() {
        setCount((prevCount) => {
            return prevCount + 1;
        });
    }
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={handleIncrease}>Increase Count</button>
        </div>
    );
}

export default Counter;
