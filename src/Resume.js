import React, {Component} from 'react';
import './fonts.css';
import SkillsBadge from './SkillsBadge';
import EducationBadge from './EducationBadge';
import Hobbies from './Hobbies';
import './Resume.css';

class Resume extends Component{
    
    render(){

        const eduBadgeLight = {
            backgroundColor: "rgb(255, 255, 255)",
            borderBottom: "2px solid black",
            borderRight: "2px solid black"
        }
        const eduBadgeDark = {
            backgroundColor: "rgb(134, 99, 226, 0.35)",
            borderBottom: "2px solid black",
            borderRight: "2px solid black"
        }
        const lightBack = {
            background: "rgb(255, 255, 255, 0.7)"
        }
        return(
            <div id="resumeBack" className="resumeBackground">
                <h5 className="mainFont resumeTitle p-5 text-center">
                    <strong>RESUME</strong>
                </h5>
                <div className="resume p-2">
                    {/*Skills Section */}
                    <div className="m-0 p-0 w-100">
                        <div className="container" style={lightBack}>
                            <h5 className="mainFont py-3 pl-0 ml-0">
                                <strong>SKILLS</strong>
                            </h5>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="row">
                                        <div className="col-6">
                                            {/*HTML section */}
                                            <SkillsBadge
                                                badgeId={"b_skill"} imgSource={"/img/html5Logo.png"} 
                                                imgAlt={"html"} proficiency={"90"} experience={"7"}
                                            />
                                        </div>
                                        <div className="col-6">
                                            {/*CSS section */}
                                            <SkillsBadge 
                                                badgeId={"l_skill"} imgSource={"/img/cssLogo.png"} 
                                                imgAlt={"css"} proficiency={"90"} experience={"7"}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="row">
                                        <div className="col-6">
                                            {/*Javascript section */}
                                            <SkillsBadge 
                                                badgeId={"b_skill"} imgSource={"/img/jsLogo.png"} 
                                                imgAlt={"javascript"} proficiency={"90"} experience={"6"}
                                            />
                                        </div>
                                        <div className="col-6">
                                            {/*React.js section */}
                                            <SkillsBadge
                                                badgeId={"l_skill"} imgSource={"/img/reactLogo.png"} 
                                                imgAlt={"react"} proficiency={"90"} experience={"2"}
                                            />
                                        </div> 
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="row">
                                        <div className="col-6">
                                            {/*Bootstrap section */}
                                            <SkillsBadge 
                                                badgeId={"b_skill"} imgSource={"/img/bootstrapLogo.png"} 
                                                imgAlt={"bootstrap"} proficiency={"85"} experience={"2"}
                                            />
                                        </div>
                                        
                                        <div className="col-6">
                                            {/*Firebase section */}
                                            <SkillsBadge 
                                                badgeId={"l_skill"} imgSource={"/img/firebaseLogo.png"} 
                                                imgAlt={"firebase"} proficiency={"80"} experience={"2"}
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-sm-6">
                                    <div className="row">
                                        <div className="col-6">
                                            {/*Wordpress section */}
                                            <SkillsBadge 
                                                badgeId={"b_skill"} imgSource={"/img/wordpressLogo.png"} 
                                                imgAlt={"wordpress"} proficiency={"75"} experience={"2"}
                                            />
                                        </div>

                                        <div className="col-6">
                                            {/*Java section */}
                                            <SkillsBadge 
                                                badgeId={"l_skill"} imgSource={"/img/javaLogo.png"} 
                                                imgAlt={"java"} proficiency={"70"} experience={"5"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="row">
                                        <div className="col-6">
                                            {/*C# section */}
                                            <SkillsBadge 
                                                badgeId={"b_skill"} imgSource={"/img/csharpLogo.png"} 
                                                imgAlt={"csharp"} proficiency={"70"} experience={"2"}
                                            />
                                        </div>
                                        <div className="col-6">
                                            {/*C section */}
                                            <SkillsBadge 
                                                badgeId={"l_skill"} imgSource={"/img/cLogo.png"} 
                                                imgAlt={"c"} proficiency={"70"} experience={"3"}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="row">
                                        <div className="col-6">
                                            {/*Python section */}
                                            <SkillsBadge 
                                                badgeId={"b_skill"} imgSource={"/img/pythonLogo.png"} 
                                                imgAlt={"python"} proficiency={"65"} experience={"2"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-dark m-2 mt-0" style={{height: "2px"}}></div>

                    {/*Education Section */}
                    <div className="container w-100">
                        <h5 className="mainFont py-3 pl-0 m-0"><strong>EDUCATION</strong></h5>
                        <div className="row">
                            <div className="col-sm-6 p-2">
                                <EducationBadge 
                                    imgSource={"/img/uctLogo.png"} 
                                    eduHeader={"University of Cape Town (2022)"}
                                    eduBody={"Bachelor of Science in Computer Science and Computer Engineering"}
                                    eduStyle={eduBadgeDark}
                                />
                            </div>
                            <div className="col-sm-6 p-2">
                                <EducationBadge 
                                    imgSource={"/img/lightLogo.png"} 
                                    eduHeader={"Light Academy Boys Secondary School Nairobi (2015)"}
                                    eduBody={"Kenya Certificate of Secondary Education(KCSE)"}
                                    eduStyle={eduBadgeLight}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bg-dark m-2" style={{height: "2px"}}></div>

                    {/*Hobbies Section */}
                    <Hobbies />

                    <div className="bg-dark m-2" style={{height: "2px"}}></div>

                    <div className="text-center p-3">
                        <form method="get" action="Oliver_CV_29Sep2022.pdf" target="_blank">
                            <button type="submit" className="buttonFont resumeButton m-2">
                                Download Resume PDF
                            </button>
                        </form>    
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;