import React, {Component} from 'react';
import './fonts.css';

 class SkillsBadge extends Component{
    
    render(){
        const {badgeId, imgSource, imgAlt, proficiency, experience} = this.props;

        return(
            //badge layout
            <div className={"skillBack form-inline mb-3 p-1 py-3 rounded "+badgeId}>
                <img src={imgSource} alt={imgAlt} height="55px" width="55px"/>
                <div className="mx-2 ml-0 mt-1 p-0">
                    <div className="form-inline m-0 p-0 bg-transparent rounded" style={{width:"100%"}}>
                        <div className="m-0 p-0 border border-success rounded" style={{width:"100%", maxWidth: "500px", height: "6px"}}>
                            <div className="m-0 p-0 bg-success rounded" style={{width: proficiency+"%", height: "5px"}}></div>
                        </div>
                    </div>
                    <div className="skillTextFont form-inline m-0 mt-1 mb-0 p-0 small">
                        {proficiency}% Proficiency
                    </div>
                    <div className="skillTextFont form-inline m-0 mt-0 p-0 small">
                        {experience} years Experience
                    </div>
                </div>
            </div>
        );
    }
}

export default SkillsBadge;