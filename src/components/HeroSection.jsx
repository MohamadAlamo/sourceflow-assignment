import React from "react";
import heroImage from "../assets/Image1.png";
import "../styles/custom.css";

const HeroSection = () => {
  return (
    <section
      className="py-5"
      style={{
        backgroundColor: "var(--primary-blue)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container py-5" style={{ maxWidth: "1240px" }}>
        <div className="row align-items-center">
          <div className="col-lg-6 text-white">
            <p className="mb-3">Software Recruitment Specialists</p>
            <h1 className="display-4 fw-bold mb-4">Elevate your career</h1>

            <div className="d-flex mb-3" style={{ height: "60px" }}>
              <input
                type="text"
                className="form-control form-control-lg h-100 custom-placeholder"
                placeholder="E.g. networking"
                style={{
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  borderTopLeftRadius: "25px",
                  borderBottomLeftRadius: "25px",
                  fontSize: 16,
                  fontWeight: 700,
                }}
              />
              <button
                className="btn px-5 h-100"
                style={{
                  backgroundColor: "var(--yellow)",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  borderTopRightRadius: "25px",
                  borderBottomRightRadius: "25px",
                  fontWeight: 700,
                  fontSize: "16px",
                  whiteSpace: "nowrap",
                }}
              >
                Search jobs
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <img
                src={heroImage}
                alt="Professional with laptop"
                className="img-fluid rounded"
                style={{ maxHeight: "450px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          backgroundColor: "var(--coral)",
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          backgroundColor: "var(--yellow)",
          bottom: 0,
          right: 0,
          transform: "translate(30%, 30%)",
        }}
      ></div>
    </section>
  );
};

export default HeroSection;
