
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
                  <div>
                    <div style={{display:'flex',flexWrap:'wrap'}}>
                        {cell.map((innerCell,i)=>{
                             return(
                                <div style={{background:'black',width:'100px',height:'100px',marginTop:'0 auto'}}>
                                    <div style={{background:'white',width:'75px',height:'75px',borderRadius:'100%'}}></div>
                                </div>
                            );
                        })}
                    </div>
                    
                  </div>
                  )  
                }

            </div>
        );
    }
}
export default GameBoard;