import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import mongodb from "../../assets/mongodb.png";
import next from "../../assets/next.png";
import node from "../../assets/node.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import express from "../../assets/express.png";

export default function index() {
  return (
    <div className="container-fluid work">
      <div className="row">
        <div className="left-section col-xs-12 col-md-6">
          <div className="left-about-content ">
            <h2 className="about-header">About me</h2>
            <p className="about-paragraph ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              accusantium iusto doloribus hic totam, ad dolore dicta deleniti
              doloremque soluta voluptate recusandae. Eos illo doloremque
              corporis modi accusantium fugit quibusdam temporibus maxime,
              delectus iure,.
              <br />
            </p>
          </div>
        </div>
        <div className="right-section-skills col-xs-12 col-md-6">
          <div className="skills-container">
            <h1 className="skills-header">My Skills</h1>
            <div className="card skills-cards skills-card1">
              <div className="img-wrapper">
                <img
                  src={react}
                  alt="an surfing in ocean"
                  className="card-img-top"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">React JS</h5>
                <p className="card-text">A great tool for SPA</p>
              </div>
            </div>
            <div className="card skills-cards skills-card2">
              <div className="img-wrapper">
                <img
                  src={redux}
                  alt="an surfing in ocean"
                  className="card-img-top"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Redux</h5>
                <p className="card-text">A great tool for SPA</p>
              </div>
            </div>
            <div className="card skills-cards skills-card3">
              <div className="img-wrapper">
                <img
                  src={next}
                  alt="an surfing in ocean"
                  className="card-img-top"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Next JS</h5>
                <p className="card-text">A great tool for SPA</p>
              </div>
            </div>
            <div className="card skills-cards skills-card4">
              <div className="img-wrapper">
                <img
                  src={mongodb}
                  alt="an surfing in ocean"
                  className="card-img-top"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Mongo DB</h5>
                <p className="card-text">A great tool for SPA</p>
              </div>
            </div>
            <div className="card skills-cards skills-card5">
              <div className="img-wrapper">
                <img
                  src={node}
                  alt="an surfing in ocean"
                  className="card-img-top"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Node JS</h5>
                <p className="card-text">A great tool for SPA</p>
              </div>
            </div>
            <div className="card skills-cards skills-card6">
              <div className="img-wrapper">
                <img
                  src={express}
                  alt="an surfing in ocean"
                  className="card-img-top"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Express</h5>
                <p className="card-text">A great tool for SPA</p>
              </div>
            </div>
            <div className="gallery-button">
              <NavLink
                to="/work"
                role="button"
                className=" btn btn-primary btn-skills"
              >
                Gallery
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="row skills-card-row">
//             <h1 className="skills-header">My Skills</h1>
//           </div>
//           <div className="row skills-card-row ">
//             {/* <div className="card-group"> */}
//             <div
//               className="col-sm-12 col-md-6 mb-1 d-flex align-items-stretch"
//               id="react-card"
//             >
//               <div className="card skills-card">
//                 <div className="img-wrapper">
//                   <img
//                     src={react}
//                     alt="an surfing in ocean"
//                     className="card-img-top"
//                   />
//                 </div>
//                 <div className="card-body">
//                   <h5 className="card-title">React JS</h5>
//                   <p className="card-text">A great tool for SPA</p>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="col-sm-12 col-md-6 mb-1 d-flex align-items-stretch"
//               id="redux-card"
//             >
//               <div className="card skills-card">
//                 <div className="img-wrapper">
//                   <img
//                     src={redux}
//                     alt="an surfing in ocean"
//                     className="card-img-top"
//                   />
//                 </div>
//                 <div className="card-body">
//                   <h5 className="card-title">Redux</h5>
//                   <p className="card-text">Central state management</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row skills-card-row ">
//             <div
//               className="col-sm-12 col-md-6 mb-1 d-flex align-items-stretch"
//               id="next-card"
//             >
//               <div className="card skills-card">
//                 <div className="img-wrapper">
//                   <img
//                     src={next}
//                     alt="an surfing in ocean"
//                     className="card-img-top"
//                   />
//                 </div>
//                 <div className="card-body">
//                   <h5 className="card-title">Next JS</h5>
//                   <p className="card-text">Full stack development</p>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="col-sm-12 col-md-6 mb-1 d-flex align-items-stretch"
//               id="express-card"
//             >
//               <div className="card skills-card">
//                 <div className="img-wrapper express-img">
//                   <img
//                     src={express}
//                     alt="an surfing in ocean"
//                     className="card-img-top"
//                   />
//                 </div>
//                 <div className="card-body">
//                   <h5 className="card-title ">Express JS</h5>
//                   <p className="card-text">Backend server</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row skills-card-row ">
//             <div
//               className="col-sm-12 col-md-6 mb-1 d-flex align-items-stretch"
//               id="mongo-card"
//             >
//               <div className="card skills-card">
//                 <div className="img-wrapper">
//                   <img
//                     src={mongodb}
//                     alt="an surfing in ocean"
//                     className="card-img-top"
//                   />
//                 </div>
//                 <div className="card-body">
//                   <h5 className="card-title">Mongo DB</h5>
//                   <p className="card-text">NoSQL Database</p>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="col-sm-12 col-md-6 mb-1 d-flex align-items-stretch"
//               id="node-card"
//             >
//               <div className="card skills-card">
//                 <div className="img-wrapper">
//                   <img
//                     src={node}
//                     alt="an surfing in ocean"
//                     className="card-img-top"
//                   />
//                 </div>
//                 <div className="card-body">
//                   <h5 className="card-title">Node JS</h5>
//                   <p className="card-text">Backend development</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row gallery-button">
//             <div className="col-12 gallery-button">
//               <NavLink
//                 to="/work"
//                 role="button"
//                 className=" btn btn-primary btn-skills"
//               >
//                 Gallery
//               </NavLink>
//             </div>
//           </div>
