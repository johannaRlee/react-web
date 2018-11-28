import React, { Component } from "react";
import "../App.css";
import githubicon from "../images/github.png";

export default class Headlines extends Component {
  render() {
    return (
      <div className="Headlines">
        <header className="Headlines-header">
          <p>
            <ul className="h3 list-inline">
              <li className="list-inline-item">Creative Front End Developer</li>
              <li className="list-inline-item text-info">Women Who Code Director</li>
              <li className="list-inline-item">UX/UI Enthusiast </li>
              <li className="list-inline-item text-info">
                <img id="git" src={githubicon} alt="githubicon" /><a href="https://github.com/justjo120">justjo120 </a>
              </li>
            </ul>
            <hr />
            <h1>ReactJS Projects:</h1>
            <hr />
          </p>
        </header>
      </div>
    );
  }
}
