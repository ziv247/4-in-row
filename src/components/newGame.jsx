import React from "react";
import { Button } from "react-bootstrap";
class NewGamePopUp extends React.Component {
  render() {
    return (
      <div style={newGameWrapperStyle}>
        <h1 style={{ textAlign: "center" }}>Game Over ! </h1>
        <form action="">
          <h3 style={{ marginBottom: "15px" }}>
            Would you like to play another game?
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "15px"
            }}
          >
            <Button value="yes" variant="secondary" size="sm">
              Yes
            </Button>
            <Button value="no" variant="secondary" size="sm">
              No
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
export default NewGamePopUp;
const newGameWrapperStyle = {
  boxShadow: "8px 8px 8px 8px",
  position: "absolute",
  top: "55px",
  right: "75px",
  width: "900px",
  backgroundColor: "white",
  zIndex: "1000"
};
