import bootstrapBundle from "bootstrap/dist/js/bootstrap.bundle";
import { Link } from "react-router-dom";
import { useState } from "react";
import { processData } from "../../scripts/HelperFunctions";

function MyHeader(props) {
  const [showDropdown, setShowDropdown] = useState("");
  const [, brandNames] = processData(null, props.brands, false, false);

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            I-Com Systems
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-page">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/product-page"}
                  className="nav-link dropdown-toggle"
                  onMouseEnter={() => setShowDropdown("show")}
                  onMouseLeave={() => setShowDropdown("")}
                >
                  Products
                </Link>
                <ul
                  className={"dropdown-menu " + showDropdown}
                  onMouseEnter={() => setShowDropdown("show")}
                  onMouseLeave={() => setShowDropdown("")}
                >
                  {brandNames.map((brandName) => (
                    <li key={brandName}>
                      <Link
                        to={"/product-page#hdr-" + brandName}
                        className="dropdown-item"
                      >
                        {brandName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <form className="d-flex" id="search-form">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="search-input"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container" id="search-results"></div>
      <script src={bootstrapBundle}></script>
    </>
  );
}

export default MyHeader;
