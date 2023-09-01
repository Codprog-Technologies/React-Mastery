import React, { useEffect, useState } from "react";

function Timer() {
    const [timer, setTimer] = useState(0);
    useEffect(() => {
        console.log("component re-render");
        const timerId = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
    }, []);
    return <h1>{timer}</h1>;
}

export default Timer;
