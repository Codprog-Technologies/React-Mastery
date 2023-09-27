import Post from "../components/Post";

import { redirect, useLoaderData } from "react-router-dom";

// 6.4 +
// loaders function
// Form
// actions

// Component mount --> fetch

// loaders

// fetch ---> component mount

// loader
// 1. provide loaders function to route
// 2. useLoaderData and get data

export async function loader({ request }, { isLoggedIn }) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    const endpoint = "https://jsonplaceholder.typicode.com/posts";
    // if user is not logged in then redirect to login
    if (!isLoggedIn) {
        return redirect(`/login?redirectTo=${pathname}`);
    }
    const res = await fetch(endpoint);
    if (!res.ok) {
        throw new Error("Something went wrong!");
    }
    const data = await res.json();
    return data;
}

function Posts() {
    const posts = useLoaderData();

    return (
        <>
            <h1>posts</h1>
            {posts &&
                posts.map((post) => (
                    <Post key={post.id} id={post.id} title={post.title} />
                ))}
        </>
    );
}

export default Posts;
