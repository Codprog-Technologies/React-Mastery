import React from "react";

function DisplayFullName({ fullName }) {
    console.log("display full name rendered");
    return <span>{fullName}</span>;
}

export default DisplayFullName;
