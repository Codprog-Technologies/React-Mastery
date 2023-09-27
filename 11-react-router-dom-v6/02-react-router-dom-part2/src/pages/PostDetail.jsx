import { useLoaderData } from "react-router-dom";
import { redirect } from "react-router-dom";
export async function loader({ params }, { isLoggedIn }) {
    if (!isLoggedIn) {
        return redirect("/login");
    }
    const url = "https://jsonplaceholder.typicode.com/posts";
    const res = await fetch(`${url}/${params.id}`);
    const data = await res.json();
    return data;
}
function PostDetail() {
    const post = useLoaderData();
    return (
        <>
            <h1>Single Post</h1>
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
