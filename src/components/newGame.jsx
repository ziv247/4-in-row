import React from "react";
import { Button, Modal } from "react-bootstrap";

class NewGamePopUp extends React.Component {
  constructor(props) {
    super(props);
    this.board = this.props.board;
  }
  handleNewGame = e => {
    if (e.target.value === "no") {
      window.location.reload();
    } else {
      for (let i = 0; i < this.board.board.length; i++) {
        for (let j = 0; j < this.board.board[0].length; j++) {
          this.board.board[i][j] = 0;
        }
      }

      this.props.winEvent(this.board.board);
    }
  };
  render() {
    const { winner } = this.props;

    return (
      <Modal show={true} style={{ color: "white" }}>
        <Modal.Header
          closeButton
          className="popdownWood"
          style={{ borderBottom: 0 }}
        >
          <Modal.Title>{`Player${winner.key} has won this game!`}</Modal.Title>
        </Modal.Header>
        <Modal.Body
          className="popdownWood"
          style={{ borderBottom: 0, borderTop: 0 }}
        >
          <h3>Would you like to play another game?</h3>
        </Modal.Body>
        <Modal.Footer className="popdownWood" style={{ borderTop: 0 }}>
          <Button
            variant="outline-info"
            value="NO"
            onClick={this.handleNewGame}
            className="modalBtn"
          >
            NO
          </Button>
          <Button
            variant="outline-info"
            value="YES!"
            onClick={this.handleNewGame}
            className="modalBtn"
          >
            YES!
          </Button>
        </Modal.Footer>
      </Modal>

      // <Modal.Dialog className="popdownWood">
      //   <Modal.Header style={{ textAlign: "center" }} closeButton>
      //     <Modal.Title>Game Over !</Modal.Title>
      //   </Modal.Header>

      //   <Modal.Body>
      //     <h3>{`Player ${winner.key} has won this game!`}</h3>
      //   </Modal.Body>

      //   <Modal.Footer>
      //     <h4 style={{ marginBottom: "15px" }}>
      //       Would you like to play another game?
      //     </h4>
      //     <div
      //       style={{
      //         display: "flex",
      //         justifyContent: "space-around",
      //         marginBottom: "15px",
      //         width: "100%"
      //       }}
      //     >
      //       <Button
      //         onClick={this.handleNewGame}
      //         value="yes"
      //         variant="secondary"
      //         size="sm"
      //       >
      //         Yes
      //       </Button>
      //       <Button
      //         onClick={this.handleNewGame}
      //         value="no"
      //         variant="secondary"
      //         size="sm"
      //       >
      //         No
      //       </Button>
      //     </div>
      //   </Modal.Footer>
      // </Modal.Dialog>
    );
  }
}
export default NewGamePopUp;
