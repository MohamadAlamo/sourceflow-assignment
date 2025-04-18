import React from "react";
// import linkedin from "../assets/linkedin.svg";

const Footer = () => {
  return (
    <footer
      className="py-5"
      style={{ background: "var(--primary-blue)", color: "white" }}
    >
      <div className="container" style={{ maxWidth: "1240px" }}>
        <div className="row g-4">
          <div className="col-lg-3 mb-4">
            <h5 className="mb-4">Software Recruitment co.</h5>
            <div className="d-flex gap-3 mb-3">
              <a href="#" className="text-white">
                <i className="bi bi-linkedin"></i>
                {/* <img src={linkedin} alt="linkedin" height="20" /> */}
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 mb-4">
            <h5 className="mb-4">Explore</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Homepage
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  For jobseekers
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  For clients
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Our sectors
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Resources
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 mb-4">
            <h5 className="mb-4">Sectors</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Software engineering
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  DevOps
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Cloud
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Infrastructure
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Testing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 mb-4">
            <h5 className="mb-4">Services</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Nav item
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Nav item
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Nav item
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Nav item
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Nav item
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
