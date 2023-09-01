import React from "react";
import { createPortal } from "react-dom";
function MyComponent() {
    return createPortal(
        <>
            <h1>my component heading</h1>
            <p>my component paragraph</p>
        </>,
        document.getElementById("newRoot")
    );
}

export default MyComponent;
