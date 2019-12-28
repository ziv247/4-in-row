import React from 'react';
import "../style/scoreBoard.css";
class ScoreBoard extends React.Component { 
    constructor(){
        super();
    }
    render() {
        return(
            <div style={{position:'absolute',top:'-35%',left:'1%'}} class="score-board">
                <div class="player">
                    <h4>Player 1</h4>
                    <div class="score-box">
                        15
                    </div>
                </div>
                <div class="player">
                    <h4>Player 2</h4>
                    <div class="score-box">
                        10
                    </div>
                </div>
            </div>
        );
    }
}
export default ScoreBoard;