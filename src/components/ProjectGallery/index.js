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
      {projects.map((pr) => (
        <div className="row">
          <Project title={pr.title} />
        </div>
      ))}

      {/* <div className="row">
        <Project title={projects[0].title}/>
      </div>
      <div className="row">
        <Project title={projects[0].title}/>
      </div>
      <div className="row">
        <Project title={projects[0].title}/>
      </div>
      <div className="row">
        <Project title={projects[0].title}/>
      </div>
      <div className="row last-row">
        <Project title={projects[0].title}/>
      </div> */}
    </div>
  );
}
