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
                <div class="logonav">
                    <img src="./famowhite.png" alt="famowhite"></img>
                    <nav id="dropdown" class="nav1">
                        <a href="Famo.us University">Famo.us University</a>
                        <a href="Demos">Demos</a>
                        <a href="Famo.us/Angular">Famo.us/Angular</a>
                        <a href="Help">Help</a>
                        <a href="Blog">Blog</a>
                        </nav>
                    </div>
                <div onclick="myFunction()" class="mobile-menu-icon">
                    <i  class="fas fa-bars"></i>
                </div>
                <div class="download">
                    <button>Download</button>
                </div>
            </header>
        );
    }
}

export default Header;