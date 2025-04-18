import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
      <div className="container" style={{ maxWidth: "1240px" }}>
        <a className="navbar-brand fw-bold text-primary" href="#">
          Software Recruitment co.
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                For jobseekers
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                For clients
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Sectors
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Resources
              </a>
            </li>
          </ul>

          <div className="d-flex">
            <button
              className="btn me-2 rounded-pill"
              style={{
                backgroundColor: "var(--yellow)",
                fontSize: "16px",
                fontWeight: 700,
              }}
            >
              Upload CV
            </button>
            <button
              className="btn rounded-pill"
              style={{
                backgroundColor: "var(--coral)",
                fontSize: "16px",
                fontWeight: 700,
              }}
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
