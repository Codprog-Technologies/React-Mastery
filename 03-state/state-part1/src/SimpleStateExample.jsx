import { useState } from "react";
// hooks
// useState
// useEffect
// IN react we cannot use normal variables
// to change the UI

// state
// state ----> data
// when state change

// useState
// useState(defaultValue) ---> [stateValue, functionToUpdateThatStateValue]

// state ---> Harshit
// state --> John
// when state changes our component rerender
// then UI changes
function SimpleStateExample() {
    console.log("component rendered");
    const [firstName, setFirstName] = useState("Harshit");
    function handleNameChange() {
        if (firstName === "Harshit") {
            setFirstName("John");
        } else {
            setFirstName("Harshit");
        }
    }
    return (
        <div className="App">
            <h1>{firstName}</h1>
            <button onClick={handleNameChange}>Change Name</button>
        </div>
    );
}

export default SimpleStateExample;
