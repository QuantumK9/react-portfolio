import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<About />} />

        <Route path="work" element={<Work />} />

        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
