import { Outlet, Link } from "react-router-dom";
function App() {
  return (
    <main>
      <div id="sidebar">
        {/* other elements */}

        <nav>
          <ul>
            <li>
              <Link className="active" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"reviews"}>Reviews</Link>
            </li>
            <li>
              <Link to={"reviews"}>Creative Image Slider</Link>
            </li>
            <li>
              <Link to={"reviews"}>Card Transitions</Link>
            </li>
            <li>
              <Link to={"reviews"}>Password Generator</Link>
            </li>
          </ul>
        </nav>

        {/* other elements */}
      </div>
      <section className="app-container">
        <div className="title">
          <h2>Components</h2>
          <div className="underline"></div>
          <Outlet />
        </div>
      </section>
    </main>
  );
}

export default App;
