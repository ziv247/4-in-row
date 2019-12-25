import React, { Component } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

import Game from "./../API/game";
import { Player } from "../API/player";

const mainDiv = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

class Main extends Component {
  constructor(props) {
    super(props);
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
    this.game.initBoard();
  };

  render() {
    return (
      <div style={mainDiv}>
        <Button variant="outline-dark" onClick={e => this.onStart(e)}>
          Start
        </Button>

        <ButtonGroup
          size="lg"
          ref={this.chooseNumOfPlayers}
          style={{ display: "none" }}
        >
          <Button variant="outline-dark" onClick={e => this.onPlayerInit(1)}>
            P vs P
          </Button>
          <Button variant="outline-dark" onClick={e => this.onPlayerInit(2)}>
            P vs Computer
          </Button>
        </ButtonGroup>

        <ButtonGroup
          size="lg"
          ref={this.buildBoardBtn}
          style={{ display: "none" }}
        >
          <Button variant="outline-dark" onClick={this.handleDefBoard}>
            Default Board (6X7)
          </Button>
          {/* <Button variant="outline-dark">Custom Board </Button> */}
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-dark"
              id="dropdown-basic"
              size="lg"
              style={{ borderBottomLeftRadius: "0", borderTopLeftRadius: "0" }}
            >
              Custom Board
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <div></div>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonGroup>
      </div>
    );
  }
}

export default Main;
