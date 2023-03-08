import React from "react";
import { NavLink } from "react-router-dom";
import Project from "../Project";
import WorkHeader from "../WorkHeader";
import "./index.css";
import projects from "../../utils/projects.json";

export default function index() {
  return (
    <div className="container-fluid work">
      <div className="row">
        <WorkHeader />
      </div>
      {projects.map((pr, index) => (
        <div className={index === 5 ? "row last-row" : "row"} key={pr.id}>
          <Project
            title={pr.title}
            id={pr.id}
            description={pr.description}
            subtitle={pr.subtitle}
            techs={pr.techs}
            screenshotPath={pr.screenshotPath}
            repoUrl={pr.repoUrl}
            websiteUrl={pr.websiteUrl}
          />
        </div>
      ))}
    </div>
  );
}
