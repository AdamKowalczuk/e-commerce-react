import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1 className="display-3">404</h1>
            <h1>error</h1>
            <h2>page not found</h2>
            <h3>
              the requestedd URL
              <span className="text-danger">
                {this.props.location.pathname}
              </span>{" "}
              was not found
            </h3>
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5 text-capitalize"
                type="button"
              >
                go home
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
