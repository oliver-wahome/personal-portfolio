import React, {Component} from 'react';
import './fonts.css';
import './About.css';

class About extends Component{
    
    render(){
        
        return(
            <div id="aboutBack" className="aboutBack">
                <h5 className="mainFont aboutTitle text-center p-5">
                    <strong>ABOUT</strong>
                </h5>
                <div className="container about" >
                    <div className="row justify-content-center align-items-center">
                        <div className="aboutImageSection text-center col-sm-4">
                            <img className="aboutImage rounded-circle" src="./img/oliverAbout22Mar2023.jpg" height="200px" width="200px" alt="..."/>
                        </div>
                        <div className="col-sm-6">
                            <p className="aboutTitleFont rounded p-2 m-0" >
                                I'm a Full Stack Software Developer with advanced frontend and backend skills
                            </p>
                            <p className="aboutDescFont rounded p-2 m-0"> 
                                I am passionate about programming and particularly interested in using technology to solve
                                real-world problems. I am currently focused on frontend and backend development with the
                                short-term goal of improving my mobile development skills. In the long run, I intend to delve into
                                Artificial Intelligence.
                            </p>
                                
                        </div>
                    </div>

                </div>
                        
            </div>
        )
    }
}

export default About;

