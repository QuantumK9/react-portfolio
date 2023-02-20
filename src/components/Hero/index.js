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
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --- part 2 --- */}
    </>
  );
}
