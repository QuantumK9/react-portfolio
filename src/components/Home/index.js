import React from "react";
import "./index.css";

export default function index() {
  return (
    <>
      <div className="jumbotron">
        <div className="custom-jumbo row">
          <div className="left-jumbo col-xs-12 col-sm-6">
            <div className="row row-col-1 align-items-center">
              <div className="card mb-3 w-50 mx-auto">
                <img src="..." alt="..." />
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
      <div className="container-fluid work">
        <div className="row">
          <div className="left-section col-xs-12 col-sm-6">
            <div className="row row-cols-1">
              <div className="card col-6">
                <div className="card-body">
                  <h5 className="card-title">Surf Report</h5>
                  <p className="card-text">Vanilla JS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right-section col-xs-12 col-sm-6 card-group">
            <div class="row row-cols-1 row-cols-md-2">
              {/* <div className="card-group"> */}
              <div class="col mb-4">
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
              <div class="col mb-4">
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
              <div class="col mb-4">
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
              <div class="col mb-4">
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
          </div>
        </div>
      </div>

      <section className="about-contact container-fluid">
        <div className="row contact-text w-100 mt-5 mb-2 mx-auto">
          <article className="about col-12" id="about">
            <h2 className="pt-3">About Me</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, harum, velit placeat officia nobis sit laboriosam
              magni, officiis beatae consequuntur praesentium fugiat nam.
              Praesentium incidunt fuga exercitationem natus sed officia eos cum
              nemo nobis pariatur ullam, voluptatem, culpa in labore facilis?
              Suscipit nihil ipsa quae doloribus soluta mollitia, reiciendis
              laborum voluptate, atque, eos illo hic provident distinctio
              voluptates quo veritatis!
            </p>
          </article>
        </div>

        <div className="row contact-text w-100 mt-2 mb-5 mx-auto">
          <article className="contact col-12" id="contact">
            <h2 className="pt-3">Contact Me</h2>
            <ul className="contact-links py-3 pl-0 ml-0">
              <li className="contact-link">
                <a href="#" target="_blank">
                  Telephone{" "}
                </a>
              </li>
              <li className="contact-link">
                <a href="#" target="_blank">
                  Email
                </a>
              </li>
              <li className="contact-link">
                <a href="#" target="_blank">
                  Github
                </a>
              </li>
              <li className="contact-link">
                <a href="#" target="_blank">
                  Twitter
                </a>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
