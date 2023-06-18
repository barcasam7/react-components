import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    document.getElementById("bar1")?.classList.toggle("animateBar1");
    document.getElementById("bar2")?.classList.toggle("animateBar2");
    document.getElementById("bar3")?.classList.toggle("animateBar3");
    setOpen(!open);
  };

  return (
    <div id="sidebar">
      <nav className="hide-mobile nav">
        <ul>
          <li>
            <Link className="active" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
          <li>
            <Link to="expandable-image">Expandable Image</Link>
          </li>
          <li>
            <Link to="expandable-image">Github Profile Search</Link>
          </li>
          <li>
            <Link to="reviews">Card Transitions</Link>
          </li>
          <li>
            <Link to="reviews">Password Generator</Link>
          </li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar" id="bar1"></div>
        <div className="bar" id="bar2"></div>
        <div className="bar" id="bar3"></div>
      </div>
      <nav className={open ? "opened mobile-nav" : "mobile-nav"}>
        <ul>
          <li>
            <Link className="active" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
          <li>
            <Link to="expandable-image">Expandable Image</Link>
          </li>
          <li>
            <Link to="expandable-image">Github Profile Search</Link>
          </li>
          <li>
            <Link to="reviews">Card Transitions</Link>
          </li>
          <li>
            <Link to="reviews">Password Generator</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
