import React, {Component} from 'react';
import './fonts.css';

class ProjectSummaryImgFirst extends Component{
    render(){
        const {projectTitle, projectInfo, imageSource, projBackStyle} = this.props;

        return(
            <div style={projBackStyle}>
                <table style={{height: "420px"}}>
                    <tr style={{borderBottom: "1px solid #8663e2"}}>
                        <td className="">
                            <div className="m-0 p-0 border border-secondary">
                                <img src={imageSource} height="100%" width="100%" alt="ProjectPic"/>    
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="">
                            <div className="card-body text-center h-100">
                                <div className="row">
                                    <h5 className="projectTitleTextFont card-title mx-0 px-0">{projectTitle}</h5>
                                </div>
                                
                                <p className="row projectDescTextFont text-dark">{projectInfo}</p>
                            </div>
                            
                        </td>
                    </tr>
                </table>
            </div>            
        )
    }
}

export default ProjectSummaryImgFirst;