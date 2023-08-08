import { useState, useRef } from "react";

// useRef
// example of useRef
// diff between useRef and useState
// handle form inputs using useRef

// [state, setState] = useState()

// string
// number
// []
// {}

// learnings
// change of ref does not trigger re-render of the component

// function ExampleuseRef() {
//     console.log("component re-render");
//     const h1Ref = useRef();
//     function handleClick() {
//         const h1Element = h1Ref.current;
//         h1Element.textContent = "Hi Harshit";
//         h1Element.style.background = "blue";
//         h1Element.style.color = "white";
//     }
//     return (
//         <div>
//             <h1 ref={h1Ref}>Hello There</h1>
//             <button onClick={handleClick}>Change Content</button>
//         </div>
//     );
// }

// controlled components

// uncontrolled using useRef

// state vs useRef

function ExampleuseRef() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    function handleSubmit(e) {
        e.preventDefault();
        const usernameInput = usernameRef.current;
        const passwordInput = passwordRef.current;
        console.log("Username", usernameInput.value);
        console.log("Password", passwordInput.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <br />
            <input type="text" id="username" ref={usernameRef} />
            <br />
            <label htmlFor="password">password</label>
            <br />
            <input type="password" id="password" ref={passwordRef} />
            <br />
            <br />
            <button>Submit</button>
        </form>
    );
}

export default ExampleuseRef;
