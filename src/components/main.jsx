import React, { Component } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import GameBoard from "./gameBoard.jsx";
import "../style/style.css";

import Game from "./../API/game";
import { Player } from "../API/player";

const mainDiv = {
  height: "83vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardOn: false,
      board: []
    };
    this.chooseNumOfPlayers = React.createRef();
    this.buildBoardBtn = React.createRef();
    this.game = new Game();
  }

  onStart = e => {
    e.target.style.display = "none";
    this.chooseNumOfPlayers.current.style.display = "inline-flex";
  };

  onPlayerInit = key => {
    this.chooseNumOfPlayers.current.style.display = "none";
    this.buildBoardBtn.current.style.display = "inline-flex";
    // eslint-disable-next-line default-case
    switch (key) {
      case 1:
        this.game.player1 = new Player(1);
        this.game.player2 = new Player(2);
        break;
      case 2:
        this.game.player1 = new Player(1);
        this.game.player2 = new Player(2);
        break;
    }
  };

  handleDefBoard = () => {
    this.setState({
      board: this.game.initBoard(),
      boardOn: !this.state.boardOn
    });
  };
  handleSubmit = () => {
    this.setState({
      board: this.game.initBoard(),
      boardOn: !this.state.boardOn
    });
  };

  render() {
    return (
      <div style={mainDivStyle}>
        {!this.state.boardOn ? (
          <div>
            <Button
              variant="outline-dark"
              onClick={e => this.onStart(e)}
              className="mainBtn"
            >
              Start
            </Button>

            <ButtonGroup
              size="lg"
              ref={this.chooseNumOfPlayers}
              style={{ display: "none" }}
            >
              <Button
                variant="outline-dark"
                onClick={e => this.onPlayerInit(1)}
                className="mainBtn"
              >
                P vs P
              </Button>
              <Button
                variant="outline-dark"
                onClick={e => this.onPlayerInit(2)}
                className="mainBtn"
              >
                P vs Computer
              </Button>
            </ButtonGroup>

            <ButtonGroup
              size="lg"
              ref={this.buildBoardBtn}
              style={{ display: "none" }}
            >
              <Button
                variant="outline-dark"
                onClick={this.handleDefBoard}
                className="mainBtn"
              >
                Default Board (6X7)
              </Button>

              <Dropdown>
                <Dropdown.Toggle
                  variant="outline-dark"
                  id="dropdown-basic"
                  className="mainBtn"
                  style={{
                    borderBottomLeftRadius: "0",
                    borderTopLeftRadius: "0"
                  }}
                >
                  Custom Board
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <form onSubmit={this.handleSubmit} action="">
                    <input
                      id="rowsInput"
                      placeholder="Number of Rows"
                      type="text"
                    />
                    <input
                      id="columnsInput"
                      style={{ margin: "25px 0" }}
                      placeholder="Number of Columns"
                      type="text"
                    />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <input value="submit" type="submit" />
                    </div>
                  </form>
                </Dropdown.Menu>
              </Dropdown>
            </ButtonGroup>
          </div>
        ) : (
          <GameBoard player2={this.game.player2} player1={this.game.player1} matrix={this.state.board} />
        )}
      </div>
    );
  }
}

export default Main;

//styling

const mainDivStyle = {
  height: "85vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
