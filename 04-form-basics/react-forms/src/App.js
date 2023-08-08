import { useState } from "react";
import "./App.css";

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // function handleUsername(e) {
    //     setUsername(e.target.value);
    // }
    function handleSubmit(e) {
        e.preventDefault();
        console.log("hello", username);
    }
    return (
        <div className="App">
            <h1>Form Tutorial</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">password: </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
