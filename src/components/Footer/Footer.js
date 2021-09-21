import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="container-top">
          <h6>About This Project</h6>
          <p className="text-justify">To-Do list made with React.</p>
          <hr />
        </div>
        <div className="container-bottom">
          <div className="row">
            <p className="copyright-text">
              Copyright &copy; 2021 Hecho con <span className="heart">❤</span>{" "}
              por <a href="https://ichicodes.com">Ichicodes</a>.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
