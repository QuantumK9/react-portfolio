import React from "react";
import "./index.css";

export default function index() {
  return (
    <div>
      <div className="left-section col-xs-12 col-sm-6">
        <h2>
          <span>01.</span> Project 1
        </h2>

        <p className="h2-paragraph project">Accept payments online,</p>
        <div className="h3-paragraph-wrapper">
          <p className="h3-paragraph project mobile-hide">
            Led the full design process on a multi million dollar domain for a
            fintech company that is redefining the world of payments.
            <br />
          </p>
        </div>
        <div className="role-wrapper">
          <div className="horizontal-line"></div>
          <p className="h4-paragraph">
            <span className="text-bolder">Role : </span> Product, Web-Design,
            Development &amp; SEO.
          </p>
          <div className="horizontal-line"></div>
        </div>
        <div className="button-wrapper">
          <a
            href="https://pay.com/"
            target="_blank"
            className="casestudy-button _2 w-button"
          >
            Go To Website
          </a>
          <a href="#" className="casestudy-button disabled w-button">
            Case-study coming soon
          </a>
        </div>
      </div>
      <div className="right-section col-xs-12 col-sm-6 card-group">one</div>
    </div>
  );
}
