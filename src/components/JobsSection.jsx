import React from "react";
import python from "../assets/python.svg";
import arrowRight from "../assets/arrow-right.svg";
import arrowLeft from "../assets/arrow-left.svg";

const jobs = [
  {
    id: 1,
    color: "var(--yellow)",
    textColor: "var(--primary-blue)",
    title: "Software Engineer",
    location: "London",
    salary: "£65,000",
    description:
      "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
  },
  {
    id: 2,
    color: "var(--primary-blue)",
    textColor: "var(--light-text)",
    title: "Software Engineer",
    location: "London",
    salary: "£65,000",
    description:
      "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
  },
  {
    id: 3,
    color: "var(--coral)",
    textColor: "var(--primary-blue)",
    title: "Software Engineer",
    location: "London",
    salary: "£65,000",
    description:
      "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
  },
];

const JobsSection = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "var(--light-blue)" }}>
      <div className="container py-4" style={{ maxWidth: "1240px" }}>
        <h2 className="text-center mb-5 fw-bold">Latest Jobs</h2>

        <div className="row g-5">
          {jobs.map((job) => (
            <div key={job.id} className="col-md-4">
              <div
                className="card h-100 border-0 rounded-5"
                style={{ backgroundColor: job.color }}
              >
                <div className="card-body p-4">
                  <span className="badge bg-white text-primary mb-3 px-3 py-2 ">
                    <span className="text-primary me-1">
                      <img src={python} alt="python" height="20" />
                    </span>
                    Python
                  </span>
                  <h4
                    className="card-title mb-3"
                    style={{ color: job.textColor }}
                  >
                    {job.title}
                  </h4>

                  <div className="mb-3">
                    <p className="mb-2" style={{ color: job.textColor }}>
                      <i className="bi bi-geo-alt-fill"></i> {job.location}
                    </p>
                    <p className="mb-3" style={{ color: job.textColor }}>
                      <i className="bi bi-cash me-2"></i> {job.salary}
                    </p>
                  </div>

                  <p
                    className="card-text mb-4"
                    style={{ color: job.textColor }}
                  >
                    {job.description}
                  </p>

                  <button className="btn btn-light w-100 rounded-4">
                    View this job
                  </button>
                </div>
                <div className="card-footer bg-transparent border-0 p-4">
                  <small
                    style={{
                      color:
                        job.textColor === "white"
                          ? "rgba(255, 255, 255, 0.8)"
                          : "rgba(6, 78, 164, 0.8)",
                      fontWeight: 300,
                      fontSize: "13px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                    }}
                  >
                    Posted on 29/08/2023
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between align-items-center mt-5">
          <div>
            <button className="btn">
              <img src={arrowLeft} alt="arrowRight" height="40" />
            </button>
            <button className="btn">
              <img src={arrowRight} alt="arrowRight" height="40" />
            </button>
          </div>
          <a
            href="#"
            className="btn btn-link text-decoration-none"
            style={{ color: "var(--dark-blue-text)" }}
          >
            View more jobs
          </a>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
