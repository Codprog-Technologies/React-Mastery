import React from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";
function Login() {
    const { setIsLoggedIn } = useAuth();
    const location = useLocation();
    const previousPath = location.state?.previousPath || "/";
    console.log(previousPath);
    const navigate = useNavigate();
    function login() {
        setIsLoggedIn(true);
        navigate(previousPath, { replace: true });
    }
    return (
        <div>
            <h1>Login page</h1>
            <button onClick={login}>Login</button>
        </div>
    );
}

export default Login;
