import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import "../style/square.css";
class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.player);
    this.state = {
      matrix: props.matrix,
      handleInsert: props.handleInsert,
      currentPlayer: props.player
    };
  }

  paintCircle = (rowInx, colInx) => {
    this.state.handleInsert(rowInx, colInx);
  };

  render() {
    return (
      <Container>
        <Button
          onClick={this.props.handleDefBoard}
          className={"resetButtonStyle "}
          variant="outline-secondary"
        >
          Back to Main Menu
        </Button>

        <div className={"curPlayer "}>
          Current player:
          <br />
          <span>{`${this.state.currentPlayer.name}`}</span>
        </div>
        {this.state.matrix.map((cell, rowIndex) => (
          <Row
            style={{
              margin: "auto",
              maxWidth: "88vh"
            }}
            key={rowIndex}
            className={"playBoard"}
          >
            {cell.map((innerCell, columnIndex) => {
              let cellColor =
                innerCell === 0
                  ? "emptyCell"
                  : innerCell === 1
                  ? "p1Token"
                  : "p2Token";
              return (
                <div
                  key={columnIndex}
                  style={{
                    width: `${100 / cell.length}%`,
                    height: `${100 / cell.length - 2}vw`,
                    maxHeight: `${100 / cell.length - 2}vh`,
                    maxWidth: `${100 / cell.length - 2}vh`
                  }}
                  className={"square-box"}
                >
                  <div
                    onClick={() => this.paintCircle(rowIndex, columnIndex)}
                    className="square-content"
                  >
                    <div
                      style={{
                        maxHeight: `${100 / cell.length - 2}vw`,
                        maxWidth: `${100 / cell.length - 2}vh`
                      }}
                      className={cellColor}
                    ></div>
                  </div>
                </div>
              );
            })}
          </Row>
        ))}
      </Container>
    );
  }
}
export default GameBoard;
