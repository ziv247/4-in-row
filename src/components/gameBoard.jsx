import React from "react";
import { Container, Row, Col } from "react-bootstrap";
class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: props.matrix
    };
    console.log(props.matrix);
  }
  handleSquareClick=()=>{

  }
  render() {
    // const matrix = [
    //   [0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0],
    //   [0, 0, 1, 0, 0, 0]
    // ];
    return (
      <Container>
        {this.state.matrix.map((cell, c) => (
          <Row>
            {/* <Col style={{ display: "flex", flexWrap: "wrap" }}> */}
            {cell.map((innerCell, i) => {
              let cellColor =
                innerCell == 0 ? "white" : innerCell == 1 ? "red" : "yellow";
              return (
                <Col key={i} onClick={this.handleSquareClick} style={{ backgroundColor: "black" }}>
                  <div
                    style={{
                      background: cellColor,
                      width:"80px",
                      height:"80px",
                      borderRadius:"100%",
                      margin: "10px auto"
                    }}
                  />
                </Col>
              );
            })}
          </Row>
        ))}
      </Container>
    );
  }
}
export default GameBoard;
