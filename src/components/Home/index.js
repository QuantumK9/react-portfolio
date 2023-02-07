import React from "react";

export default function index() {
  return (
    <>
      <div className="jumbotron">
        <div className="custom-jumbo">
          <h1 className="display-4">Iraklis K</h1>
          <h2>Web Development Solutions</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quos.
          </p>
        </div>

        <hr className="my-4" />
      </div>
      <div className="container-fluid work">
        <div className="row">
          <div className="left-section col-xs-12 col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Surf Report</h5>
                <p className="card-text">Vanilla JS</p>
              </div>
            </div>
          </div>
          <div className="right-section col-xs-12 col-sm-6">
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

        {/* <h2 className="work-header" id="work">
          Work
        </h2>
        <div className="row">
          <div className="card-container col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div className="card bg-dark text-yellow" id="card1">
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

          <div className="card-container col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div className="card bg-dark text-yellow" id="card2">
              <img
                src="./images/02-portfolio-1.jpg"
                alt="Wall with LED lamps"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">LED Wall</h5>
                <p className="card-text">React</p>
              </div>
            </div>
          </div>

          <div className="card-container col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div className="card bg-dark text-yellow" id="card3">
              <img
                src="./images/02-portfolio-2.jpg"
                alt="Laptop with calculator on screen"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Calculator</h5>
                <p className="card-text">Vanilla JS and CSS</p>
              </div>
            </div>
          </div>

          <div className="card-container col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div className="card bg-dark text-yellow" id="card4">
              <img
                src="./images/pokemon-app.jpg"
                alt="Pokemon character"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Pokedex Card Game</h5>
                <p className="card-text">React and APIs</p>
              </div>
            </div>
          </div>

          <div className="card-container col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div className="card bg-dark text-yellow" id="card5">
              <img
                src="./images/game-app.jpg"
                alt="A brick wall with video game character"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Lights Out Game</h5>
                <p className="card-text">React</p>
              </div>
            </div>
          </div>

          <div className="card-container col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div className="card bg-dark text-yellow" id="card6">
              <img
                src="./images/weather-app.jpg"
                alt="Storm over sea"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Weather app</h5>
                <p className="card-text">React and APIs</p>
              </div>
            </div>
          </div> */}
        {/* </div> */}
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
