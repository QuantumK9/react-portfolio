import React from "react";

export default function index() {
  return (
    <div>
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
    </div>
  );
}
