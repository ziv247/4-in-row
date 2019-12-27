import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style/square.css";
class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   matrix: props.matrix
    // };
    this.state = {
      matrix: [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0]
      ]
    };
    console.log(props.matrix);
  }
  render() {
    return (
      <Container>
        {this.state.matrix.map((cell, c) => (
          <Row style={{ margin: "auto", maxWidth: "88vh" }}>
            {/* <Col style={{ display: "flex", flexWrap: "wrap" }}> */}
            {cell.map((innerCell, i) => {
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
                    // style={{
                    //   background: cellColor,
                    //   width: "80%",
                    //   height: "80%",
                    //   borderRadius: "100%",
                    //   margin: "10px auto"
                    // }}
                    className="square-content"
                  >
                    <div
                      style={{
                        maxHeight: `${100 / cell.length - 2}vw`,
                        maxWidth: `${100 / cell.length - 2}vh`
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
