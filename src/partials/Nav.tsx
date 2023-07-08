import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import router from "../router/router";

const Nav = () => {
  const [open, setOpen] = useState<boolean>(false);
  let location = useLocation();

  const toggleMenu = () => {
    document.getElementById("bar1")?.classList.toggle("animateBar1");
    document.getElementById("bar2")?.classList.toggle("animateBar2");
    document.getElementById("bar3")?.classList.toggle("animateBar3");
    setOpen(!open);
  };

  let routes = router.routes[0] !== undefined ? router.routes[0].children : [];

  return (
    <div id="sidebar">
      <nav className="hide-mobile nav">
        <ul>
          <li key="0">
            <Link className={location.pathname === "/" ? "active" : ""} to="/">
              Home
            </Link>
          </li>
          {routes !== undefined &&
            routes.map((route, key) => (
              <li key={key}>
                <Link className={location.pathname === route.path ? "active" : ""} to={route.path as string}>
                  {route.path?.substring(1).replace("-", " ")}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar" id="bar1"></div>
        <div className="bar" id="bar2"></div>
        <div className="bar" id="bar3"></div>
      </div>
      <nav className={open ? "opened mobile-nav" : "mobile-nav"}>
        <ul>
          <li key="0">
            <Link onClick={toggleMenu} className={location.pathname === "/" ? "active" : ""} to="/">
              Home
            </Link>
          </li>
          {routes !== undefined &&
            routes.map((route, key) => (
              <li key={key}>
                <Link onClick={toggleMenu} className={location.pathname === route.path ? "active" : ""} to={route.path as string}>
                  {route.path?.substring(1).replace("-", " ")}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
