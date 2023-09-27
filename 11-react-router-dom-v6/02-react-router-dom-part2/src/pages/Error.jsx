import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
    const error = useRouteError();
    console.dir(error);
    return <h1>{error.message}</h1>;
}

export default Error;
