import { useContext } from "react";
import { MyAppContext } from "./main";
// step: import useContext

function Grandchild() {
    const { someFunction, key1 } = useContext(MyAppContext);
    return (
        <div
            style={{
                padding: "2rem",
                backgroundColor: "#FFD9B7",
            }}
        >
            <h3> Grandchild</h3>
            <p>{key1}</p>
            <button onClick={someFunction}>Call My Func</button>
        </div>
    );
}

export default Grandchild;
