import React from "react";
import "../style/scoreBoard.css";
class ScoreBoard extends React.Component {
  render() {
    return (
      <div
        style={{ position: "absolute", top: "-30%", left: "-5%" }}
        className="score-board"
      >
        <div className="player">
          <h4>Player 1</h4>
          <div className="score-box">15</div>
        </div>
        <div className="player">
          <h4>Player 2</h4>
          <div className="score-box">10</div>
        </div>
      </div>
    );
  }
}
export default ScoreBoard;
