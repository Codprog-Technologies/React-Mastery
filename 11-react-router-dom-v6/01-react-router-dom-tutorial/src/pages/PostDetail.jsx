import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const url = "https://jsonplaceholder.typicode.com/posts";
function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    async function fetchPost() {
        const res = await fetch(`${url}/${id}`);
        const data = await res.json();
        console.log(data);
        setPost(data);
    }
    useEffect(() => {
        fetchPost();
    }, []);
    return (
        <>
            {post && (
                <>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </>
            )}
        </>
    );
}

export default PostDetail;
