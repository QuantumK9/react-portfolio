import React from "react";
import { NavLink } from "react-router-dom";
import Project from "../Project";
import Container from "../Container";
import "./index.css";

export default function index() {
  return (
    <div className="container-fluid work">
      <div className="row">
        <Project />
      </div>
      <div className="row">
        <Project />
      </div>
      <div className="row">
        <Project />
      </div>
      <div className="row">
        <Project />
      </div>
      <div className="row">
        <Project />
      </div>
      <div className="row">
        <Project />
      </div>
    </div>
  );
}
