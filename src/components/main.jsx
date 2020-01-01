import React, { Component } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import GameBoard from "./gameBoard.jsx";
import Game from "./../API/game";
import NewGamePopUp from "./newGame.jsx";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardOn: false,
      board: [],
      currentPlayer: null,
      winPlayer: null,
      newGame: false
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

    this.game.setPlayers(key);

    this.setState({ currentPlayer: this.game.currentPlayer });
  };

  handleDefBoard = () => {
    this.setState({
      board: this.game.initBoard(6, 7),
      boardOn: !this.state.boardOn
    });
  };

  handleSubmit = e => {
    const rowsInputValue = document.getElementById("rowsInput").value;
    const columnsInputValue = document.getElementById("columnsInput").value;
    console.log(rowsInputValue, columnsInputValue);
    this.setState({
      board: this.game.initBoard(rowsInputValue, columnsInputValue),
      boardOn: !this.state.boardOn
    });
  };
  winEvent = board => {
    console.log("winEvent", this.game);
    this.setState({
      boardOn: !this.state.boardOn,
      newGame: !this.state.newGame,
      board: board
    });
  };

  handleInsert = (rowIndex, colIndex) => {
    if (this.game.insertion(colIndex, this.winEvent)) {
      this.setState({
        currentPlayer: this.game.currentPlayer,
        board: this.game.board.getBoard()
      });
    }
  };

  render() {
    return (
      <div className={"mainDiv"}>
        {!this.state.boardOn ? (
          <div>
            <Button
              variant="outline-secondary"
              onClick={e => this.onStart(e)}
              className="mainBtn "
            >
              Start Playing
            </Button>

            <ButtonGroup
              size="lg"
              ref={this.chooseNumOfPlayers}
              style={{ display: "none" }}
            >
              <Button
                variant="outline-secondary"
                onClick={e => this.onPlayerInit(2)}
                className="mainBtn main-headline"
                style={{
                  borderBottomleftRadius: "0 !important",
                  borderTopLeftRadius: "0 !important",
                  marginRight: "50px"
                }}
              >
                Player VS Player
              </Button>
              <Button
                variant="outline-secondary"
                onClick={e => this.onPlayerInit(1)}
                className="mainBtn main-headline"
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
                variant="outline-secondary"
                onClick={this.handleDefBoard}
                className="mainBtn main-headline"
              >
                Default Board (6X7)
              </Button>

              <Dropdown>
                <Dropdown.Toggle
                  variant="outline-secondary"
                  id="dropdown-basic"
                  className="mainBtn main-headline"
                  style={{
                    borderBottomLeftRadius: "0",
                    borderTopLeftRadius: "0",
                    marginLeft: "50px"
                  }}
                >
                  Custom Board
                </Dropdown.Toggle>

                <Dropdown.Menu className="popdownWood">
                  <form style={{ textAlign: "center" }} action="">
                    <input
                      id="rowsInput"
                      placeholder="Number of Rows"
                      type="text"
                    />
                    <input
                      id="columnsInput"
                      placeholder="Number of Columns"
                      type="text"
                      className={"my-4"}
                    />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <button
                        onClick={this.handleSubmit}
                        variant="outline-secondary"
                        type="submit"
                      >
                        Play
                      </button>
                    </div>
                  </form>
                </Dropdown.Menu>
              </Dropdown>
            </ButtonGroup>
          </div>
        ) : (
          <GameBoard
            player={this.game.currentPlayer}
            matrix={this.state.board}
            handleInsert={this.handleInsert}
            handleDefBoard={this.handleDefBoard}
            game={this.game}

          />
        )}
        {this.state.newGame && (
          <NewGamePopUp
            board={this.game.board}
            winEvent={this.winEvent}
            handleDefBoard={this.handleDefBoard}
            winner={this.game.currentPlayer}
          />
        )}
      </div>
    );
  }
}

export default Main;

