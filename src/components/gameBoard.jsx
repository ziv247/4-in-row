import {Container,Row,Col} from 'react-bootstrap';
import React from 'react';
class GameBoard extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        const matrix=[
            [[],[],[],[],[],[]],
            [[],[],[],[],[],[]],
            [[],[],[],[],[],[]],
            [[],[],[],[],[],[]],
            [[],[],[],[],[],[]],
            [[],[],[],[],[],[]],
            [[],[],[],[],[],[]]
        ]
        return(
            <div>
                {
                  matrix.map((cell,c)=>
                  <Container>
                    <Row style={{display:'flex',flexWrap:'wrap'}}>
                        {cell.map((innerCell,i)=>{
                             return(
                                <Col style={blackSquareStyle}>
                                    <div style={{background:'white',width:'50px',height:'50px',borderRadius:'100%'}}></div>
                                </Col>
                            );
                        })}
                    </Row>
                    
                  </Container>
                  )  
                }

            </div>
        );
    }
}
export default GameBoard;

const blackSquareStyle={background:'black',marginTop:'0 auto',display:'flex',justifyContent:'center',alignItems:'center'}