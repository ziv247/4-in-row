import React from "react";
import { Button,Modal } from "react-bootstrap";
class NewGamePopUp extends React.Component {
    constructor(props){
        super(props);
    }
    handleNewGame=(e)=>{
        const { board } = this.props;
        if(e.target.value === 'no') {
            this.props.handleDefBoard()
            this.props.winEvent()
        }else{
            for(let i = 0; i < board.board.length; i++){
                for(let j = 0; j < board.board[0].length; j++){
                    if(board.board[i][j] != '0'){
                        board.board[i][j] = 0 ;
                    }else{
                        continue ;
                    }
                }
            }
            this.props.winEvent()
        }
    }
  render() {
      const { winner } = this.props;
    return (
        <Modal.Dialog  style={newGameWrapperStyle}>
            <Modal.Header  style={{ textAlign: "center" }} closeButton>
                <Modal.Title>Game Over !</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h3>{(`Player ${winner.key} has won this game!`)}</h3>
            </Modal.Body>

            <Modal.Footer>
                <h4 style={{marginBottom:'15px'}}>Would you like to play another game?</h4>
                <div style={{display:'flex',justifyContent:'space-around',marginBottom:'15px',width:'100%'}}>
                    <Button onClick={this.handleNewGame} value="yes" variant="secondary" size="sm">Yes</Button>
                    <Button onClick={this.handleNewGame} value="no" variant="secondary" size="sm">No</Button>
                </div>
            </Modal.Footer>
        </Modal.Dialog>
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
