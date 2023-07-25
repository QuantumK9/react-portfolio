import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

export default class index extends Component {
  state = {
    showCollapsedMenu: false,
  };

  toggleMenu = () => {
    // console.log("clicked" + this.state.showCollapsedMenu);
    this.setState({
      showCollapsedMenu: !this.state.showCollapsedMenu,
    });
  };

  render() {
    const show = this.state.showCollapsedMenu ? "show" : "";
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top custom-navbar ">
        <NavLink to="/" className="navbar-brand" href="#">
          Iraklis K
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.toggleMenu}
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon custom-burger"></span>
        </button>
        <div className={`collapse navbar-collapse ${show}`}>
          <div className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="work"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Work
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="contact"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>
          </div>
        </div>
      </nav>
    );
  }
}
