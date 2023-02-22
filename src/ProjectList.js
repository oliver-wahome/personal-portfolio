import React, {Component} from 'react';
import ProjectSummaryImgFirst from './ProjectSummaryImgFirst';
import ProjectSummaryTextFirst from './ProjectSummaryTextFirst';
import './fonts.css';
import './ProjectList.css';

class ProjectList extends Component{
    constructor(){
        super();
        this.state = {
            //previous project list
            // imageSource: ['/img/golfscorecardImg.png', '/img/pwdgeneratorImg.png', '/img/poloforestImg.png', '/img/familyChores1.png'],
            // projectTitle: ['GOLF SCORECARD APPLICATION', 'PASSWORD GENERATOR', 'POLO FOREST WEBSITE', 'FAMILY CHORES APPLICATION'],
            // projectInfo: [
            // 'The application enables users to input their strokes and automatically calculate their scores while playing a round of golf.',
            // 'The application generates various strengths of passwords from keywords input by the user.',
            // 'This is a website for a recreational facility in India.',
            // 'Family Chores helps different groups of people organise chores amongst themselves on a weekly basis.',
            // ]


            //new project list
            imageSource: ['/img/brokerThumbnail.png', '/img/d-agencyThumbnail.png', '/img/golfscorecardThumbnail.png', '/img/ubunifuThumbnail.png'],
            projectTitle: ['BROKER', 'DIGITAL AGENCY WEBSITE', 'GOLF SCORECARD WEB APPLICATION', 'UBUNIFU WEBSITE CLONE'],
            projectInfo: [
            'Broker is a financial management system created to assist freelancers and self-employed entrepreneurs manage and track their finances.',
            'This is a website designed and created for a digital agency company.',
            'This application stores and calculates golfers\' scores while playing a round of golf. Players can then download the scorecard as a png to their device.',
            'This is a clone of the main Ubunifu College website',
            ]
        }
    }
    
    render(){

        const noDecor = {
            textDecoration: "none",
            height: "100%"
        }

        const projectBadge={
            padding: "10px",
            minHeight: "420px",
            border: "1px solid #8663e2",
            borderBottom: "2px solid #8663e2",
            borderRight: "2px solid #8663e2",
            borderRadius: "10px",
            color: "#8663e2"
        }
        return(
                <div id="projectBack" className="projectBackground">
                    <div className="mainFont projectTitleSection text-center">
                        <h5 className="projectTitle">
                            <strong>PROJECTS</strong>
                        </h5>
                    </div>
                    
                    <div className="project container">                        
                        <div className="projectSection row">
                            <div className="col-md-3 h-100 py-3">
                                <a href="https://broker-1b177.web.app/" style={noDecor} target="_blank" rel="noreferrer">
                                    <ProjectSummaryImgFirst imageSource ={this.state.imageSource[0]} 
                                                projectTitle={this.state.projectTitle[0]} 
                                                projectInfo={this.state.projectInfo[0]}
                                                projBackStyle={projectBadge}
                                    />
                                </a>
                            </div>
                            <div className="col-md-3 h-100 py-3">
                                <a href="https://digitalagency-bc742.web.app/" style={noDecor} target="_blank" rel="noreferrer">
                                    <ProjectSummaryTextFirst imageSource ={this.state.imageSource[1]} 
                                                projectTitle={this.state.projectTitle[1]} 
                                                projectInfo={this.state.projectInfo[1]}
                                                projBackStyle={projectBadge}
                                    />
                                </a>
                            </div>
                            <div className="col-md-3 h-100 py-3">
                                <a href="https://golfscorecard-e6785.web.app/" style={noDecor} target="_blank" rel="noreferrer">
                                    <ProjectSummaryImgFirst imageSource ={this.state.imageSource[2]} 
                                                projectTitle={this.state.projectTitle[2]} 
                                                projectInfo={this.state.projectInfo[2]}
                                                projBackStyle={projectBadge}
                                    />
                                </a>
                            </div>
                            <div className="col-md-3 h-100 py-3">
                                <a href="https://oliver-wahome.github.io/ubunifucollegeClone/" style={noDecor} target="_blank" rel="noreferrer">
                                    <ProjectSummaryTextFirst imageSource ={this.state.imageSource[3]} 
                                                projectTitle={this.state.projectTitle[3]} 
                                                projectInfo={this.state.projectInfo[3]}
                                                projBackStyle={projectBadge}
                                    />
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
        )
    }
}

export default ProjectList;