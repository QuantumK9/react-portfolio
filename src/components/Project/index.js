import React from "react";
import "./index.css";

export default function index({
  id,
  title,
  description,
  subtitle,
  techs,
  screenshotPath,
  repoUrl,
  websiteUrl,
}) {
  return (
    <>
      <div className="left-section col-xs-12 col-md-6">
        <div className="left-content ">
          <h2 className="project-header">
            <span className="project-header-span">0{id}.</span> {title}
          </h2>

          <p className="project-subtitle ">{subtitle}</p>
          <div className="project-content-wrapper">
            <p className="project-paragraph ">
              {description}
              <br />
            </p>

            <div className="techs-wrapper">
              {/* <div className="horizontal-line"></div> */}
              <p className="techs-paragraph">
                <span className="text-bolder">Techs Used: </span> {techs}
              </p>
              <div className="horizontal-line"></div>
            </div>
            <div className="button-wrapper">
              <a
                href={websiteUrl}
                target="_blank"
                className="project-site-link btn btn-success"
              >
                Go To Website
              </a>
              <a
                href={repoUrl}
                target="_blank"
                className="project-repo-link btn btn-primary"
              >
                Repository
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="right-section col-xs-12 col-md-6 ">
        <img src={screenshotPath} alt="project" />
      </div>
    </>
  );
}

// https://images.unsplash.com/photo-1480694313141-fce5e697ee25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
