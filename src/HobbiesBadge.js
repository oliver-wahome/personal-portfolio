import React, { Component } from 'react';
import './fonts.css';

class HobbiesBadge extends Component{
    render(){
        const {hobbyName, img, hobStyle} = this.props;

        return(
            <div className={"container rounded "+hobStyle}>
                <div className="hobTitleFont m-2 pt-2">
                    {hobbyName}
                </div>
                <div className="row m-2 p-0">
                    <div className="col text-center m-3 p-0">
                        <img className="rounded-circle" src= {img+"1.jpg"} height="120px" width="120px" alt="..." />
                    </div>
                    <div className="col text-center m-3 p-0">
                        <img className="rounded-circle" src= {img+"2.jpg"} height="120px" width="120px" alt="..." />
                    </div>
                    <div className="col text-center m-3 p-0">
                        <img className="rounded-circle" src= {img+"3.jpg"} height="120px" width="120px" alt="..." />
                    </div>
                </div>
            </div>
        );
    }
}

export default HobbiesBadge;