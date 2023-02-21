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
                            <img className="aboutImage rounded-circle" src="./img/oliverprofpic2.jpg" height="200px" width="200px" alt="..."/>
                        </div>
                        <div className="col-sm-6">
                            <p className="aboutTitleFont rounded p-2 m-0" >
                                I'm a Kenyan Computer Science student with advanced web and mobile development skills
                            </p>
                            <p className="aboutDescFont rounded p-2 m-0"> 
                                Over the years I have gained an insatiable thirst to program and learn. 
                                This is why I consider myself a codaholic. I need my daily hit of code.
                                Currently focused on web and mobile development with the short-term goal of improving
                                my backend skills.
                                Intending within the next 5 years to delve into the fields of 
                                Artificial Intelligence, Data Science and CyberSecurity.   
                            </p>
                                
                        </div>
                    </div>

                </div>
                        
            </div>
        )
    }
}

export default About;

