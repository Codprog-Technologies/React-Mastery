import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import { apiKey } from "./constants";

// pages import
import Home from "./pages/Home";
import SingleMovieDetail from "./pages/SingleMovieDetail";
import Root from "./pages/Root";
import Error from "./pages/Error";

// loaders import

import { loader as MovieLoader } from "./pages/Home";
import { loader as SingleMovieLoader } from "./pages/SingleMovieDetail";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} errorElement={<Error />}>
            <Route index element={<Home />} loader={MovieLoader} />
            <Route
                path="/detail/:imdbId"
                element={<SingleMovieDetail />}
                loader={SingleMovieLoader}
            />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
