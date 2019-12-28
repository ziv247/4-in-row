import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style/square.css";
class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: props.matrix,
      handleInsert: props.handleInsert
    };
    // this.state = {
    //   matrix: [
    //     [0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0],
    //     [0, 0, 1, 0, 0, 0]
    //   ]
    // };
    console.log(props.matrix);
  }

  render() {
    return (
      <Container fluid style={{ height: "70vh" }}>
        {this.state.matrix.map((cell, r) => (
          <Row
            style={{
              margin: "auto",
              maxHeight: `${100 / this.state.matrix.length}%`,
              height: `${100 / this.state.matrix.length}vw`,
              maxWidth: "88vh",
              backgroundColor: "black"
            }}
          >
            {/* <Col style={{ display: "flex", flexWrap: "wrap" }}> */}
            {cell.map((innerCell, i) => {
              let cellColor =
                innerCell == 0 ? "white" : innerCell == 1 ? "red" : "yellow";
              return (
                <Col
                  style={{
                    backgroundColor: "gray",
                    border: "1px solid"
                  }}
                >
                  <div
                    onClick={() => this.state.handleInsert(r, i)}
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "black",
                      width: "85%",
                      height: "85%"
                    }}
                  ></div>
                </Col>
                // <div
                //   style={{
                //     borderRadius: "50%",
                //     width: `${(cell.length / 88) * 100}vh`,
                //     height: `${88 / cell.length}vh`,
                //     backgroundColor: "white"
                //   }}
                // ></div>
                // <div
                //   style={{
                //     backgroundColor: "black",
                //     width: `${100 / cell.length - 2}%`,
                //     height: `${100 / cell.length - 2}%`,
                //     maxHeight: `${100 / cell.length - 2}vh`,
                //     maxWidth: `${100 / cell.length - 2}vh`
                //   }}
                //   className={"square-box"}
                // >
                //   <div
                //     onClick={() => this.state.handleInsert(r, i)}
                //     className="square-content"
                //   >
                //     <div
                //       style={{
                //         maxHeight: `${100 / cell.length - 3}vw`,
                //         maxWidth: `${100 / cell.length - 3}vh`,
                //         backgroundColor: cellColor,
                //         color: "black"
                //       }}
                //     >
                //       Col i ={i}
                //     </div>
                //   </div>
                // </div>
              );
            })}
          </Row>
        ))}
      </Container>
    );
  }
}
export default GameBoard;
