import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id="sidebar">
      <nav>
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
