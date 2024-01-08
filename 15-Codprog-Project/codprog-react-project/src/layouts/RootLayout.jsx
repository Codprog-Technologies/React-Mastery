import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <header>
        <nav>
          <h1 className="logo">
            <NavLink to="/">Codprog </NavLink>
          </h1>
          <ul>
            <li>
              <NavLink to="about"> About</NavLink>
            </li>
            <li>
              <NavLink to="profile"> Profile</NavLink>
            </li>

            <li>
              <NavLink to="login"> Login</NavLink>
            </li>
            <li>
              <NavLink to="signup"> Signup</NavLink>
            </li>
            <li>
              <NavLink to="my-courses"> My Courses</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default RootLayout;
