import React from "react";
import { NavLink } from "react-router-dom";
import ProjectGallery from "../components/ProjectGallery";
import Hero from "../components/Hero";

export default function Work() {
  return (
    <div>
      <Hero />
      <ProjectGallery />
    </div>
  );
}
