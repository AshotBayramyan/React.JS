import React, {Component} from "react";
//import Li from './returnLi';

class Header extends Component{
    state = {
arr: []
    }

    data = [
        {
            status: "started",
            player1: "Garik",
            till: 15,
            player2:"Ashot" 

        },
        {
            status: "busy",
            player1: "Garik",
            till: 20,
            player2:"Ashot" 

        }
    ]
    showLi = () => {
        let tr = [];
        let td= []
        for(let i = 0; i < this.data.length; i++){
         
          tr.push(this.data[i])
       
          for(let k =0; k < tr[i].length;k++){
              td.push(<td>{tr[i][k]}</td>)
              console.log(td)
          }
      
        } 
        return <tr>{td}</tr>;
    }
    render(){
        return(

            <header >
            <table>
                <tbody>
                {this.showLi()}
                </tbody>
        
            </table>
              
            </header>
        );
    }
}
export default Header;