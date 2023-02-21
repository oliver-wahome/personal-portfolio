import React, {Component} from 'react';
import './fonts.css';

class EducationBadge extends Component{
    render(){
        const {imgSource, eduHeader, eduBody, eduStyle} = this.props; 

        return(
            <div className="m-0 mb-3 p-2 rounded h-100" style={eduStyle}>
                <div className="m-2">
                    <img src={imgSource} height="100px" width="100px" alt="..." />
                </div>
                <div className="m-2"> 
                    <div className="eduTitleTextFont small">{eduHeader}</div>
                    <div className="eduDescTextFont small text-muted">{eduBody}</div>
                </div>
            </div>
        );
    }
}

export default EducationBadge;
