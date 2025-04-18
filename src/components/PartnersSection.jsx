import React from "react";
import microsoftLogo from "../assets/microsoft.png";
import oracleLogo from "../assets/oracle.png";
import atlassianLogo from "../assets/atlassian.png";
import cloudflareLogo from "../assets/cloudflare.png";
import vmwareLogo from "../assets/vmware.png";

const PartnersSection = () => {
  return (
    <section className="py-5 border-bottom">
      <div className="container" style={{ maxWidth: "1240px" }}>
        <p className="text-center text-secondary mb-5">Who we work with</p>
        <div className="row justify-content-between align-items-center gy-4">
          <div className="col-6 col-sm-4 col-md-2 text-center">
            <img
              src={microsoftLogo}
              alt="Microsoft"
              className="img-fluid"
              style={{ maxHeight: "30px" }}
            />
          </div>
          <div className="col-6 col-sm-4 col-md-2 text-center">
            <img
              src={oracleLogo}
              alt="Oracle"
              className="img-fluid"
              style={{ maxHeight: "25px" }}
            />
          </div>
          <div className="col-6 col-sm-4 col-md-2 text-center">
            <img
              src={atlassianLogo}
              alt="Atlassian"
              className="img-fluid"
              style={{ maxHeight: "25px" }}
            />
          </div>
          <div className="col-6 col-sm-4 col-md-2 text-center">
            <img
              src={cloudflareLogo}
              alt="Cloudflare"
              className="img-fluid"
              style={{ maxHeight: "50px" }}
            />
          </div>
          <div className="col-6 col-sm-4 col-md-2 text-center">
            <img
              src={vmwareLogo}
              alt="VMware"
              className="img-fluid"
              style={{ maxHeight: "50px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
