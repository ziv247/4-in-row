import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../style/square.css";
class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: props.matrix,
      handleInsert: props.handleInsert
    };
  }

  paintCircle = (rowInx, colInx) => {
    this.state.handleInsert(rowInx, colInx);
  };

  render() {
    return (
      <Container>
        {this.state.matrix.map((cell, rowIndex) => (
          <Row style={{ margin: "auto", maxWidth: "88vh" }}>
            {cell.map((innerCell, columnIndex) => {
              let cellColor =
                innerCell == 0 ? "white" : innerCell == 1 ? "red" : "yellow";
              return (
                <div
                  style={{
                    backgroundColor: "black",
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
                        maxWidth: `${100 / cell.length - 2}vh`,
                        backgroundColor: cellColor
                      }}
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

const resetButtonStyle = {
  position: "absolute",
  top: "-20%",
  right: "2%"
};
