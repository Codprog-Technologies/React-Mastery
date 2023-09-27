import React from "react";
import { Link } from "react-router-dom";
function Post({ id, title }) {
    return (
        <div
            style={{
                padding: "1rem",
                margin: "1rem",
                border: "2px solid #232323",
            }}
        >
            <Link to={id.toString()}>
                <h2>{title}</h2>
            </Link>
            <p> id: {id}</p>
        </div>
    );
}

export default Post;
