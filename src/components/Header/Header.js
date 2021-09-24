import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="nav-1">
        <nav>
          <div className="logo">
            <h2>To - Do</h2>
          </div>
          <div className="account">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/todo">To - Do</Link>
              </li>
              <li>
                <Link to="/weather">Weather</Link>
              </li>
              <li>
                <a
                  href="https://github.com/IchikonWD/TO-DO"
                  rel="noreferrer"
                  target="_blank"
                >
                  Repository
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ichicodes.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
