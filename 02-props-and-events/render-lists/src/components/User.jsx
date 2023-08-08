import React from "react";

function User({ firstName, lastName }) {
    return (
        <h1>
            {firstName} {lastName}
        </h1>
    );
}

export default User;
