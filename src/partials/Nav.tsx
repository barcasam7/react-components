import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

type link = {
  link: string;
  name: string;
};

const Nav = () => {
  const [open, setOpen] = useState<boolean>(false);
  let location = useLocation();
  console.log(location);

  const toggleMenu = () => {
    document.getElementById("bar1")?.classList.toggle("animateBar1");
    document.getElementById("bar2")?.classList.toggle("animateBar2");
    document.getElementById("bar3")?.classList.toggle("animateBar3");
    setOpen(!open);
  };

  const routes: link[] = [
    { link: "/", name: "home" },
    { link: "/reviews", name: "reviews" },
    { link: "/expandable-image", name: "expandable image" },
    { link: "/github-profile", name: "github profile search" },
  ];

  return (
    <div id="sidebar">
      <nav className="hide-mobile nav">
        <ul>
          {routes.map((route, key) => (
            <li key={key}>
              <Link className={location.pathname === route.link ? "active" : ""} to={route.link}>
                {route.name}
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
          {routes.map((route, key) => (
            <li key={key}>
              <Link className={location.pathname === route.link ? "active" : ""} to={route.link}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
