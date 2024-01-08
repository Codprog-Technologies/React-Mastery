import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { About, Home, Login, MyCourses, Signup, Profile } from "./pages";
import { loginAction, loginLoader } from "./pages/Login";
import { myCourseLoader } from "./pages/MyCourses";
import { profileLoader } from "./pages/Profile";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="profile" element={<Profile />} loader={profileLoader} />

      <Route
        path="login"
        element={<Login />}
        action={loginAction}
        loader={loginLoader}
      />
      <Route path="signup" element={<Signup />} />
      <Route
        path="my-courses"
        element={<MyCourses />}
        loader={myCourseLoader}
      />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
