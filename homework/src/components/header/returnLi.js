import React, {Component} from 'react';

class Li extends Component{

    render(){
        return(
        <li>{this.props.name}</li>
        );
    }
}

export default Li;