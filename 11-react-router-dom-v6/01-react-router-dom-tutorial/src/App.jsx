import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import { Home, About, Contact, Error, Posts, PostDetail, Login } from "./pages";
import RootLayout from "./layouts/RootLayout";
import AuthProvider from "./context/AuthProvider";
import RequireAuth from "./components/RequireAuth";

// step 2:  create router

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />

                <Route path="contact" element={<Contact />} />
                <Route
                    path="/posts"
                    element={
                        <RequireAuth>
                            <Posts />
                        </RequireAuth>
                    }
                />

                <Route
                    path="posts/:id"
                    element={
                        <RequireAuth>
                            <PostDetail />
                        </RequireAuth>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Error />} />
            </Route>
        )
    );

    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}

export default App;
