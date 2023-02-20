import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

export default function index() {
  return (
    <>
      <div className="jumbotron">
        <div className="custom-jumbo row">
          <div className="left-jumbo col-xs-12 col-sm-6 w-100">
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
          <div className="right-jumbo col-xs-12 col-sm-6">
            <div className="row row-col-1">
              <div className="card right-jumbo-card">
                <div className="card-body">
                  <h1 className="card-title">Card title</h1>
                  <h2 className="card-subtitle mb-2 text-muted">
                    Card subtitle
                  </h2>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --- part 2 --- */}
    </>
  );
}
