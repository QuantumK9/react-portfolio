import React from "react";
import { NavLink } from "react-router-dom";
import Project from "../Project";

export default function index() {
  return (
    <div className="container-fluid work">
      {/* <div className="row"> */}
      <Project />
      {/* </div> */}
    </div>
  );
}
