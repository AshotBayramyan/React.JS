<<<<<<< HEAD
import React, {Component} from "react";
// import Header from "./header/index";
// import Content from "./content";

class Project extends Component{
    render(){
        return(

            <div className="cube"></div>


            // <div className="container">
            //     {/* <Header /> */}
            //     {/* <Content />  */}
            // </div>
        );
    }
}


=======
import React, {Component} from "react";
import Header from "./header/index";
import Content from "./content";

class Project extends Component{
    render(){
        return(
            <div className="container">
                <Header />
                <Content /> 
            </div>
        );
    }
}

>>>>>>> d1236203f56a7b77286f1e394f45252ddaa3dab9
export default Project;