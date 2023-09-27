import { useEffect, useState } from "react";
import Post from "../components/Post";

const endpoint = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
    const [posts, setPosts] = useState(null);
    async function fetchPosts() {
        const res = await fetch(endpoint);
        const data = await res.json();
        setPosts(data);
        return data;
    }
    useEffect(() => {
        fetchPosts();
    }, []);
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
