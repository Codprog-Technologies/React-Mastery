import React from "react";
import BasicDetail from "./BasicDetail";
import { useAuth } from "./AuthProvider";
function UserProfile() {
    const { auth, setAuth } = useAuth();
    function handleLogin() {
        setAuth({ username: "harshit", email: "harshitvashisth@gmail.com" });
    }
    return (
        <>
            <h1>User Profile</h1>
            {auth.username ? (
                <BasicDetail />
            ) : (
                <button onClick={handleLogin}>login</button>
            )}
        </>
    );
}

export default UserProfile;
