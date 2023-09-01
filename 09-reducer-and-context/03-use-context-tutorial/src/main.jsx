import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createContext } from "react";
export const MyAppContext = createContext();
function myFunc() {
    console.log("hello from my func");
}
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <MyAppContext.Provider
            value={{
                key1: "value1",
                key2: "value2",
                someFunction: myFunc,
            }}
        >
            <App />
        </MyAppContext.Provider>
    </React.StrictMode>
);
