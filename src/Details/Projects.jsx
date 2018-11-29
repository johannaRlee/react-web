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
        <div className="col-sm">
          <a href="https://justjo120.github.io/todolist/">
            <figure id="todo">
              <figcaption class="figure-caption"> Todo List </figcaption>

              <img
                src={todoimg}
                alt="todo list"
                className="figure-img img-fluid rounded"
              />
            </figure>
          </a>
          </div>
          <div  className="col-sm">
            <a href="https://justjo120.github.io/pokedex-react/">
              <figure id="pokeapi">
                <figcaption class="figure-caption">Pokedex API </figcaption>
                <img
                  src={pokeapiimg}
                  alt="pokemon api"
                  className="figure-img img-fluid rounded"
                />
              </figure>
            </a>
          </div>
          <div className="col-sm">
          <a href="https://justjo120.github.io/tic-tac-toe/">
            <figure id="tictactoe">
              <figcaption class="figure-caption">Tic Tac Toe </figcaption>
              <img
                src={tictactoeimg}
                alt="tic tac toe"
                className="figure-img img-fluid rounded"
              />
            </figure>
          </a>
        </div>
        </div>
      </div>
    );
  }
}
