import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import { Home, About, Contact, Error, Posts, PostDetail, Login } from "./pages";
import RootLayout from "./layouts/RootLayout";

import { useAuth } from "./context/AuthProvider";
import RequireAuth from "./components/RequireAuth";
import { loader as fetchPosts } from "./pages/Posts";
import { loader as fetchSinglePost } from "./pages/PostDetail";
// step 2:  create router

function App() {
    const { isLoggedIn } = useAuth();
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route
                path="/"
                element={<RootLayout />}
                errorElement={<h1>Something went wrong !!!!</h1>}
            >
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />

                <Route path="contact" element={<Contact />} />
                <Route
                    path="/posts"
                    loader={(args) => {
                        return fetchPosts(args, { isLoggedIn: isLoggedIn });
                    }}
                    errorElement={<Error />}
                    element={<Posts />}
                />

                <Route
                    path="posts/:id"
                    errorElement={<Error />}
                    loader={(args) => {
                        return fetchSinglePost(args, {
                            isLoggedIn: isLoggedIn,
                        });
                    }}
                    element={<PostDetail />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Error />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
}

export default App;
