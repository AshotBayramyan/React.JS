import React, {Component} from "react";


class Content extends Component{
    state={
        checked : true
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

        },
        {
            status: "available",
            player1: "Garik",
            till: 20,
            player2:"Ashot" 

        }
    ]
    titles = ["Status", "Player1", "Till", "Player2"]
    showLi = () => {
        let tr = [];
        for(let i = 0; i < this.data.length; i++){
           let td =[];
          for(let k in this.data[i]){
              td.push(<td key={k}>{this.data[i][k]}</td>)
          }
            tr.push(<tr key={i}>{td}</tr>)
        } 
        return tr;
    }
    titles = () => {
        let tr = [];
        let th =[];
        for(let i =0; i< this.titles.length; i++){
            th.push(<th key={i}>{this.titles[i]}</th>)
        }
        tr.push(<tr>{th}</tr>);
        return tr;
    }
    render(){
        return(
        <div>
            <table>
                <tr>
                    <th>Status</th>
                    <th>Player1</th>
                    <th>Till</th>
                    <th>Player2</th>
                </tr>
                <tbody>
                {this.showLi()}
                </tbody>
            </table>
            <label>
                Busy
            <input type="checkbox" status="busy"  checked={this.state.checked} ></input>
            </label>
            <input type="checkbox" status="busy"  checked={this.state.checked} name="Busy"></input>
            <input type="checkbox" status="started" checked={this.state.checked}></input>
            <input type="checkbox" status="available" checked={this.state.checked}></input>
            </div>
           
        );
    }
}
export default Content;

