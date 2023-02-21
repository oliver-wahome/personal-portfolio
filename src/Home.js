import React, {Component} from 'react';
import './fonts.css';
import './Home.css';


class Home extends Component {
    
    render(){

        return(
            <div>
                <div className="bg-white" style={{height:"10vh"}}>
                    <div className="navbar bg-white">
                        <button className="mainFont navButton col-3 rounded-0 p-2" type="button" onClick={()=>{aboutScroll("aboutBack")}}>
                            About
                        </button>
                        <button className="mainFont navButton col-3 rounded-0 p-2" type="button" onClick={()=>{aboutScroll("projectBack")}}>
                            Projects
                        </button>
                        <button className="mainFont navButton col-3 rounded-0 p-2" type="button" onClick={()=>{aboutScroll("resumeBack")}}>
                            Resume
                        </button>
                        <button className="mainFont navButton col-3 rounded-0 p-2" type="button" onClick={()=>{aboutScroll("contactBack")}}>
                            Contact
                        </button>
                    </div>
                </div>
                
                <div className="home">
                    <div className="header position-relative">
                        
                        <div className="imgSection text-center">
                            <img id="logo" src="/img/oliverinstapic.jpg" height="150px" width="150px" className="rounded-circle" alt="..."/>
                            <h2 id="name" className="mainFont m-0">OLIVER WAHOME</h2>
                            <h6 id="jobTitle" className="mainFont m-0">SOFTWARE DEVELOPER</h6>
                        </div> 
                        
                    </div>
                </div>
                
            </div>

        );

        function aboutScroll(x){
            document.getElementById(x).scrollIntoView();
        }
    }    
}

export default Home;