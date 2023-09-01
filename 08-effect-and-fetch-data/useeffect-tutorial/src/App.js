import "./App.css";
// import CleanupFunctionDemo from "./CleanupFunctionDemo";
// import MouseMoveEvent from "./MouseMoveEvent";
import FetchDataExample from "./FetchDataExample";
import { useState } from "react";
import UserForm from "./UserForm";
import Timer from "./Timer";
// cleanup function

// events
// document.addEventListener
// sideEffect

function App() {
    const [showComponent, setShowComponent] = useState(true);
    return (
        <div className="App">
            <label htmlFor="showComponent">show component</label>
            <input
                type="checkbox"
                name="showComponent"
                id="showComponent"
                checked={showComponent}
                onChange={() => setShowComponent(!showComponent)}
            />
            {showComponent && <Timer />}
        </div>
    );
}

export default App;
