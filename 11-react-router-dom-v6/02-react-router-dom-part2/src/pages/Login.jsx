import React, { useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
function Login() {
    const { setIsLoggedIn, isLoggedIn } = useAuth();
    const [searchParams] = useSearchParams();

    const previousPath = searchParams.get("redirectTo") || "/";
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            console.log(previousPath);
            navigate(previousPath, { replace: true });
        }
    }, [isLoggedIn]);

    function login() {
        setIsLoggedIn(true);
    }
    return (
        <div>
            <h1>Login page</h1>
            <button onClick={login}>Login</button>
        </div>
    );
}

export default Login;
