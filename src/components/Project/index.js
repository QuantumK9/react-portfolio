import React from "react";
import "./index.css";

export default function index() {
  return (
    <>
      <div className="left-section col-xs-12 col-sm-6">
        <div className="left-content ">
          <h2 className="project-header">
            <span className="project-header-span">01.</span> Project Title
          </h2>

          <p className="project-subtitle ">Small description</p>
          <div className="project-content-wrapper">
            <p className="project-paragraph ">
              Led the full design process on a multi million dollar domain for a
              fintech company that is redefining the world of payments.
              <br />
            </p>

            <div className="techs-wrapper">
              {/* <div className="horizontal-line"></div> */}
              <p className="techs-paragraph">
                <span className="text-bolder">Techs Used: </span> Product,
                Web-Design, Development &amp; SEO.
              </p>
              <div className="horizontal-line"></div>
            </div>
            <div className="button-wrapper">
              <a
                href="https://pay.com/"
                target="_blank"
                className="project-site-link btn btn-success"
              >
                Go To Website
              </a>
              <a href="#" className="project-repo-link btn btn-primary">
                Case-study coming soon
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="right-section col-xs-12 col-sm-6 ">
        <img
          src="https://images.unsplash.com/photo-1480694313141-fce5e697ee25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="project"
        />
      </div>
    </>
  );
}
