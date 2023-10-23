import { useState } from "react";

function InputForm({ children }) {
    const [username, setUsername] = useState("");
    console.log("input form rendered");
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                autoComplete="off"
            />
            {children}
            <button onClick={() => setUsername("")}>Clear Input</button>
        </form>
    );
}
export default InputForm;
