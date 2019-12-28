import React, { Component } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import GameBoard from "./gameBoard.jsx";
import "../style/style.css";

import Game from "./../API/game";
import { Player } from "../API/player";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardOn: false,
      board: [],
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
    switch (key) {
      case 1:
        this.game.setPlayers(1);
        break;
      case 2:
        this.game.setPlayers(2);
        break;
      default:
        break;
    }
  };

  handleDefBoard = () => {
    this.setState({
      board: this.game.initBoard(6, 7),
      boardOn: !this.state.boardOn
    });
  };

  handleSubmit = () => {
    const rowsInputValue = document.getElementById("rowsInput").value;
    const columnsInputValue = document.getElementById("columnsInput").value;

    this.setState({
      board: this.game.initBoard(rowsInputValue, columnsInputValue),
      boardOn: !this.state.boardOn
    });
  };

  handleInsert = (rowIndex, colIndex) => {
    this.game.insertion(rowIndex, colIndex);
    console.log(this.game.board.getBoard());
    this.setState({ board: this.game.board.getBoard() });
  };

  render() {
    return (
      <div className={"mainDiv"}>
        {!this.state.boardOn ? (
          <div>
            <Button
              variant="outline-dark"
              onClick={e => this.onStart(e)}
              className="mainBtn"
            >
              Start Playing
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
                style={{
                  borderBottomleftRadius: "0 !important",
                  borderTopLeftRadius: "0 !important",
                  marginRight:'50px'
                }}
              >
                Player VS Player
              </Button>
              <Button
                variant="outline-dark"
                onClick={e => this.onPlayerInit(2)}
                className="mainBtn"
                style={{
                  borderTopLeftRadius: "0 !important",
                  borderBottomLeftRadius: "0 !important"
                }}
              >
                Player VS Computer
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
                    borderTopLeftRadius: "0",
                    marginLeft:'50px'
                  }}
                >
                  Custom Board
                </Dropdown.Toggle>

                <Dropdown.Menu style={colorBackground}>
                  <form style={{textAlign:'center'}} onSubmit={this.handleSubmit} action="">
                    <input
                      id="rowsInput"
                      placeholder="Number of Rows"
                      type="text"
                      style={colorBackground}
                    />
                    <input
                      id="columnsInput"
                      style={colorBackground}
                      placeholder="Number of Columns"
                      type="text"
                      className={'my-4'}
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
          <GameBoard
            player2={this.game.player2}
            player1={this.game.player1}
            matrix={this.state.board}
            handleInsert={this.handleInsert}
          />
        )}
      </div>
    );
  }
}

export default Main;

//styling

const mainDivStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
const colorBackground={backgroundImage:'linear-gradient( 109.7deg,  rgba(101,204,184,1) 12.9%, rgba(109,236,185,1) 101.5% )'}
