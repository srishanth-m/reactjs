import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}} bg-${props.mode}`}>
      <a className="navbar-brand" href="#">
        {props.title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              {props.text} <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
      <div className={`custom-control custom-switch text-${props.mode ==="light"?"dark" : "light"}`}>
          <input type="checkbox" className="custom-control-input " onClick={props.togglemode} id="customSwitch1"/>
          <label className="custom-control-label" htmlFor="customSwitch1">Enable dark Mode</label>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}

Navbar.defaultProps = {
  title: "title here",
  text: "text here"
}