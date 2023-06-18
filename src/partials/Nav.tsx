import { Link } from "react-router-dom";

const Nav = () => {
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
      <div className="hamburger">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className="mobile-nav">
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
