import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import bootstrap from "../../assets/bootstrap.jpeg";
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
          <div className="row skills-card-row">
            {/* <div className="card-group"> */}
            <div className="col-sm-12 col-md-4 mb-1">
              <div className="card skills-card">
                <div className="img-wrapper">
                  <img
                    src={react}
                    alt="an surfing in ocean"
                    className="card-img-top"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Surf Report</h5>
                  <p className="card-text">Vanilla JS</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mb-1">
              <div className="card skills-card">
                <div className="img-wrapper">
                  <img
                    src={react}
                    alt="an surfing in ocean"
                    className="card-img-top"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Surf Report</h5>
                  <p className="card-text">Vanilla JS</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mb-1">
              <div className="card skills-card">
                <div className="img-wrapper">
                  <img
                    src={react}
                    alt="an surfing in ocean"
                    className="card-img-top"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Surf Report</h5>
                  <p className="card-text">Vanilla JS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-4 mb-1">
              <div className="card skills-card">
                <div className="img-wrapper">
                  <img
                    src={react}
                    alt="an surfing in ocean"
                    className="card-img-top"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Surf Report</h5>
                  <p className="card-text">Vanilla JS</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mb-1">
              <div className="card skills-card">
                <div className="img-wrapper">
                  <img
                    src={react}
                    alt="an surfing in ocean"
                    className="card-img-top"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Surf Report</h5>
                  <p className="card-text">Vanilla JS</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mb-1">
              <div className="card skills-card">
                <div className="img-wrapper">
                  <img
                    src={react}
                    alt="an surfing in ocean"
                    className="card-img-top"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Surf Report</h5>
                  <p className="card-text">Vanilla JS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row r">
            <NavLink to="/work" role="button" className=" btn btn-primary">
              Gallery
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
