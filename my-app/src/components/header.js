import React, {Component} from 'react';


class Header extends Component{
    showLi = () => {
        for (let i = 0; i < 4; i++){
            return <li>HOME</li>
        }
    }
    render(){
        return(
            <header>
                <ul>
                    {this.showLi()}
                </ul>
            </header>
        );
    }
}

export default Header;