import { useState } from "react";
import InputForm from "./InputForm";
import ExtraComponent from "./ExtraComponent";

function BasicApp() {
    const [username, setUsername] = useState("");
    console.log("basic app rendered");
    return (
        <div>
            <h1>Basic App</h1>
            <InputForm username={username} setUsername={setUsername} />
            <button onClick={() => setUsername("")}>Clear Input</button>
            <ExtraComponent />
        </div>
    );
}
export default BasicApp;
