import { Outlet } from "react-router-dom";
import Nav from "../partials/Nav";

const Layout = () => {
  return (
    <>
      <Nav />
      <section className="app-container">
        <div className="title">
          <h2>Components</h2>
          <div className="underline"></div>
          <Outlet />
        </div>
      </section>
    </>
  );
};
export default Layout;
