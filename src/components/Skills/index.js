import React from "react";
import { NavLink } from "react-router-dom";

export default function index() {
  return (
    <div className="container-fluid work">
      <div className="row">
        <div className="left-section col-xs-12 col-sm-6">
          <div className="row row-cols-1">
            <div className="card col-6">
              <div className="card-body">
                <h5 className="card-title">Surf Report</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis quisquam a commodi ex nulla aut blanditiis dolores
                  tempore dignissimos consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-section col-xs-12 col-sm-6 card-group">
          <div className="row row-cols-1 row-cols-md-2">
            {/* <div className="card-group"> */}
            <div className="col mb-4">
              <div className="card">
                <img
                  src="./images/02-portfolio-4.jpg"
                  alt="an surfing in ocean"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Surf Report</h5>
                  <p className="card-text">Vanilla JS</p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <img
                  src="./images/02-portfolio-4.jpg"
                  alt="an surfing in ocean"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Surf Report</h5>
                  <p className="card-text">Vanilla JS</p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <img
                  src="./images/02-portfolio-4.jpg"
                  alt="an surfing in ocean"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Surf Report</h5>
                  <p className="card-text">Vanilla JS</p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <img
                  src="./images/02-portfolio-4.jpg"
                  alt="an surfing in ocean"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Surf Report</h5>
                  <p className="card-text">Vanilla JS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-12">
            {/* <button> */}
            <NavLink to="/projects" role="button" className="col btn btn-link">
              Gallery
            </NavLink>
            {/* </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
