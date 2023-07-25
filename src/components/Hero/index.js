import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

export default function index() {
  return (
    <>
      <div className="jumbotron">
        <div className="custom-jumbo row">
          <div className="left-jumbo col-xs-12 col-md-6 w-100">
            <div className="row row-col-1 align-items-center">
              <div className="card left-jumbo-card mb-3 mx-auto">
                <img
                  id="left-jumbo-img`"
                  className="card-img"
                  src="https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt="..."
                />
                {/* <div className="row">
                <div className="col-md-4">
                  <img src="..." alt="..." />
                </div>
              </div> */}
              </div>
            </div>
          </div>
          <div className="right-hero-jumbo col-xs-12 col-md-6">
            <div className="row row-col-1">
              <div className="card right-jumbo-card">
                <div className="card-body">
                  <h1 className="info-card-title">Iraklis K</h1>
                  <h2 className="info-card-subtitle mb-2 text-muted">
                    Web developer
                  </h2>
                  <p className="info-card-text">
                    I love programming and developing for the web! Javascript
                    React and Next are my favourites.
                  </p>
                  <NavLink
                    to="/work"
                    className="card-link btn btn-primary btn-mywork"
                    href="#"
                  >
                    My Work
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className="card-link btn btn-success btn-contact"
                    href="#"
                  >
                    Contact Me
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
