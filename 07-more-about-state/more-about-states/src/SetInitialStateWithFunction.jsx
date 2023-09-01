import { useState } from "react";

function SetInitialStateWithFunction() {
    const [nums, setNums] = useState(() => {
        console.log("Generate array with random nums");
        const randomNums = [];
        for (let i = 0; i < 10; i++) {
            randomNums.push(Math.random() * 100);
        }
        return randomNums;
    });
    return (
        <>
            <ul>
                {nums.map((num) => (
                    <li>{num}</li>
                ))}
            </ul>
            <button
                onClick={() => {
                    setNums((prevNums) => [...prevNums, Math.random() * 100]);
                }}
            >
                Add Random Num
            </button>
        </>
    );
}

export default SetInitialStateWithFunction;
