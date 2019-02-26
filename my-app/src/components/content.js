import React, {Component} from 'react';
import bullhorn from '../images/bullhorn.svg';

class Content extends Component{
    render(){
        return(
            <body>
                <div class="red">
                    <div class="txt">
                        <h2>THE ULTIMATE WEB PLATFORM FOR <br></br> DEVELOPERS AND DESIGNERS</h2>
                        <p>Famo.us is a free, open source JavaScript framework that helps 
                            you create smooth, complex UIs for any screen.</p>
                    </div>
                    <div>
                        <button class="start">Start Learning</button>
                        <button>Download</button>
                    </div>
                </div>
                <div class="gray">
                    <a href="https://github.com/Famous/famous" class="github"></a>
                    <div class="inp">
                        <input type="text" class="email" placeholder="Email Address"></input>
                        <input type="submit" class="submit" value="Get Updates"></input>
                    </div>
                </div>
                <div class="div4">
                    <div>
                        {/* chi stacvum */}
                        <img src={bullhorn} alt="bullhorn"/>
                        <hr></hr>
                        <h3>What is Famo.us?</h3>
                        <br></br>
                        <p>Famo.us is the only JavaScript framework that includes an open source 3D layout 
                            engin fully integrated with a 3D physics animation engine that can render to DOM, 
                            Canvas, or WebGL.</p>
                    </div>
                    <div>
                        <img src={require("../images/wrench.svg")} alt="wrench"></img>
                        <hr></hr>
                        <h3>Build your career</h3>
                        <br></br>
                        <p>Choosing a development platform is more than just a technical decision—it's a career 
                            decision. Whether you're a seasoned developer expanding your skills, a designer 
                            looking to bring your ideas to life, or just learning to code, we're building Famo.us 
                            for you.</p>
                    </div>
                    <div>
                        <img src={require("../images/")} alt="university_hat"></img>
                        <hr></hr>
                        <h3>Never stop learning</h3>
                        <br></br>
                        <p>Getting started is easy. Famo.us University will teach you to code in Famo.us with 
                            lessons, live code examples, and real app projects. And the Famo.us community is 
                            always here when you need help.</p>
                    </div>
                </div>
                <div class="red2">
                    <h2>What makes Famo.us different?</h2>
                </div>
                <div class="white">
                    <div>
                        <h4>Famo.us is free and open source.</h4>
                        <br></br>
                        <p>The tools you need to build Famo.us apps and sites will always be free and 
                            available to everyone.</p>
                        <br></br>
                        <h4>Famo.us is for everyone.</h4>
                        <br></br>
                        <p>If you're new to JavaScript development, we have lots of learning resources 
                            to help you get started. If you're more experienced, you can download Famo.us 
                            to start coding locally.</p>
                        <br></br>
                        <h4>Famo.us is a supportive community.</h4>
                        <br></br>
                        <p>Everyone is welcome in our IRC channel. Whether you're just getting started 
                            or you have decades of development experience, our community is here for you.</p>
                    </div>
                    <img src={require("../images/iphone-5.png")} alt="iphone5"></img>
                    <div>
                        <h4>You can learn at your own pace.</h4>
                        <br></br>
                        <p>Learn to code in Famo.us for free with online lessons and live code examples 
                            in Famo.us University or via demos with code. No download or install required.</p>
                        <br></br>
                        <h4>3D layout engine = portable performance</h4>
                        <br></br>
                        <p>Browser layout engines were designed in the 1990s to render text documents with 
                            links. The Famo.us layout engine was built from the ground up to render the apps 
                            and games of today.</p>
                        <br></br>
                        <h4>3D physics animation engine = natural motion</h4>
                        <br></br>
                        <p>To create movement that looks and feels natural, you need a 3D physics-driven 
                            animation engine. Ours is fully integrated with our 3D layout engine.</p>
                    </div>
                </div>
                <div class="lastdiv">
                    <h3>Ready to start building a beautiful UI?</h3>
                    <div>
                        <button>Learn More</button>
                        <button>Download</button>
                    </div>
                </div>
                <footer>
                    <nav class="foot">
                        <a href="Branding">Branding</a>
                        <a href="Terms">Terms</a>
                        <a href="Privacy">Privacy</a>
                        <a href="Jobs">Jobs</a>
                    </nav>
                    <p class="pbutton">© Famous Industries, Inc. 2015</p>
                    <div class="inp">
                        <input type="text" class="email" placeholder="Email Address"></input>
                        <input type="submit" class="submit" value="Get Updates"></input>
                    </div>
                </footer>
            </body>
        );
    }
}

export default Content;