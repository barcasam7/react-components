import { Outlet } from "react-router-dom";
import Nav from "../partials/Nav";

const Layout = () => {
  return (
    <>
      <Nav />
      <section className="app-container">
        <div className="title hide-mobile">
          <h2>Components</h2>
          <div className="underline"></div>
        </div>
        <Outlet />
      </section>
    </>
  );
};
export default Layout;
