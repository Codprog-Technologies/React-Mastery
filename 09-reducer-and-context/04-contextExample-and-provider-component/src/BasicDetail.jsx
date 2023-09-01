import { useAuth } from "./AuthProvider";
function BasicDetail() {
    const { auth, setAuth } = useAuth();
    function handleLogout() {
        setAuth({});
    }
    return (
        <div>
            <h2>name : {auth.username}</h2>
            <h2>email : {auth.email}</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default BasicDetail;
