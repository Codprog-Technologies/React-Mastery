import React from "react";
import Grandchild from "./Grandchild";
import { useContext } from "react";
import { MyAppContext } from "./main";
function Child() {
    const { key2 } = useContext(MyAppContext);
    return (
        <div
            style={{
                padding: "2rem",
                backgroundColor: "#7EAA92",
            }}
        >
            <h2> Child</h2>
            <p>key2 : {key2}</p>
            <Grandchild />
        </div>
    );
}

export default Child;
