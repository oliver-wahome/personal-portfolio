import React, {Component} from 'react';
import './fonts.css';

class EducationBadge extends Component{
    render(){
        const {imgSource, eduHeader, eduBody, eduStyle} = this.props; 

        return(
            <div className="m-0 mb-3 p-2 rounded h-100" style={eduStyle}>
                <div className="m-2 my-4">
                    <img src={imgSource} height="95px" alt="..." />
                </div>
                <div className="m-2 my-1"> 
                    <div className="eduTitleTextFont small">{eduHeader}</div>
                    <div className="eduDescTextFont small text-muted">{eduBody}</div>
                </div>
            </div>
        );
    }
}

export default EducationBadge;
