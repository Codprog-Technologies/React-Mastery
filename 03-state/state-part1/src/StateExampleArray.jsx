import { useState } from "react";
import { v4 as uuid } from "uuid";
function StateExampleArray() {
    const [fruits, setFruits] = useState(["Apple", "Mango"]);
    const addFruit = () => {
        // setFruits([...fruits, "newFruit"]);
        // setFruits((prevState) => {
        //     return [...prevState, "newFruit"];
        // });

        setFruits((prevState) => [...prevState, "newFruit"]);
    };
    return (
        <>
            <ul>
                {fruits.map((fruit) => (
                    <li key={uuid()}>{fruit}</li>
                ))}
            </ul>
            <button onClick={addFruit}>Add Fruit</button>
        </>
    );
}

export default StateExampleArray;
