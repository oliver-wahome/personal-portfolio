import React, {Component} from 'react';
import './fonts.css';
import './Home.css';


class Home extends Component {
    
    render(){

        return(
            <div>
                <div className="bg-white" style={{height:"10vh"}}>
                    <div className="navbar bg-white">
                        <button className="mainFont navButton col-3 rounded-0 p-2" type="button" onClick={()=>{sectionScroll("aboutBack")}}>
                            About
                        </button>
                        <button className="mainFont navButton col-3 rounded-0 p-2" type="button" onClick={()=>{sectionScroll("projectBack")}}>
                            Projects
                        </button>
                        <button className="mainFont navButton col-3 rounded-0 p-2" type="button" onClick={()=>{sectionScroll("resumeBack")}}>
                            Resume
                        </button>
                        <button className="mainFont navButton col-3 rounded-0 p-2" type="button" onClick={()=>{sectionScroll("contactBack")}}>
                            Contact
                        </button>
                    </div>
                </div>
                
                <div className="home">
                    <div className="header position-relative">
                        <div className="imgSection text-center">
                            <img src="./img/oliverHome22Mar2023.jpg" id="logo" width="180px"  height="180px" className="rounded-circle mb-3" alt="..."/>
                            <h2 id="name" className="mainFont m-0">OLIVER WAHOME</h2>
                            <h6 id="jobTitle" className="mainFont m-0">FULL STACK SOFTWARE DEVELOPER</h6>
                        </div>
                        
                    </div>
                </div>
                
            </div>

        );

        function sectionScroll(x){
            document.getElementById(x).scrollIntoView();
        }
    }    
}

export default Home;