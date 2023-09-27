import React from "react";
import { Outlet, NavLink, useNavigation } from "react-router-dom";
import styles from "./RootLayout.module.css";
import { useAuth } from "../context/AuthProvider";
function RootLayout() {
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const navigation = useNavigation();

    return (
        <div>
            <h1>Nav</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => {
                                return isActive ? styles.activeNav : null;
                            }}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="about"
                            className={(obj) => {
                                return obj.isActive ? styles.activeNav : null;
                            }}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="contact"
                            className={(obj) => {
                                return obj.isActive ? styles.activeNav : null;
                            }}
                        >
                            contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="posts"
                            className={(obj) => {
                                return obj.isActive ? styles.activeNav : null;
                            }}
                        >
                            posts
                        </NavLink>
                    </li>
                    {!isLoggedIn && (
                        <li>
                            <NavLink
                                to="login"
                                className={(obj) => {
                                    return obj.isActive
                                        ? styles.activeNav
                                        : null;
                                }}
                            >
                                Login
                            </NavLink>
                        </li>
                    )}
                </ul>
                {isLoggedIn && (
                    <button
                        onClick={() => {
                            setIsLoggedIn(false);
                        }}
                    >
                        Logout
                    </button>
                )}
            </nav>
            <hr />
            <main>
                {navigation.state === "loading" ? (
                    <h1>Loading .... </h1>
                ) : (
                    <Outlet />
                )}
            </main>
        </div>
    );
}

export default RootLayout;
