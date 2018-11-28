import React, { Component } from "react";
import "../App.css";
import todoimg from "../images/todoimg.gif";
import tictactoeimg from "../images/tictactoeimg.gif";
import pokeapiimg from "../images/pokeapiimg.gif";

export default class Projects extends Component {
  render() {
    return (
      <div className="reactJsProjects container">
        <div className="row">
          <figure id="todo" className="figure col-sm">
            <figcaption class="figure-caption"> Todo List </figcaption>

            <img
              src={todoimg}
              alt="todo list"
              className="figure-img img-fluid rounded"
            />
          </figure>
          <figure id="pokeapi" className="col-sm">
            <figcaption class="figure-caption">Pokedex API </figcaption>
            <img
              src={pokeapiimg}
              alt="pokemon api"
              className="figure-img img-fluid rounded"
            />
          </figure>
          <figure id="tictactoe" className="col-sm">
            <figcaption class="figure-caption">Tic Tac Toe </figcaption>
            <img
              src={tictactoeimg}
              alt="tic tac toe"
              className="figure-img img-fluid rounded"
            />
          </figure>
        </div>
      </div>
    );
  }
}
