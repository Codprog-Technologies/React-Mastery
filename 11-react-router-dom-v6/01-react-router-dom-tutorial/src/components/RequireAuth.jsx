import { Navigate, useLocation, useLoaderData, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
function RequireAuth({ children }) {
    const data = useLoaderData();
    console.log(data);
    const { isLoggedIn } = useAuth();
    const location = useLocation();

    if (isLoggedIn) {
        return children;
    }
    return (
        <Navigate
            to="/login"
            replace
            state={{
                previousPath: location.pathname,
            }}
        />
    );
}

export default RequireAuth;
