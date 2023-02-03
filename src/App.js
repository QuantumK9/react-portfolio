import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProjectGallery from "./components/ProjectGallery";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="projects" element={<ProjectGallery />} />

        <Route path="contact/*" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
