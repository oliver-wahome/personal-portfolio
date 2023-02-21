import React, {Component} from 'react';
import HobbiesBadge from './HobbiesBadge';
import './fonts.css';
import './Hobbies.css';

class Hobbies extends Component{
    render(){
        return(
            <div>
                <div className="rounded p-2 m-0" style={{backgroundColor:"rgb(255, 255, 255, 0.7)"}}>
                    <h5 className="mainFont py-2"><strong>HOBBIES</strong></h5>
                    <div id="carouselControl" className="carousel slide" data-ride="carousel">

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <HobbiesBadge 
                                    hobbyName={"Golf"} 
                                    img={"/img/golf"} 
                                    hobStyle={"hobDark"}
                                />
                            </div>
                            <div className="carousel-item">
                                <HobbiesBadge 
                                    hobbyName="Drawing"
                                    img="/img/drawing"
                                    hobStyle="hobLight"
                                />
                            </div>
                            <div className="carousel-item">
                                <HobbiesBadge 
                                    hobbyName="Solving Puzzles"
                                    img="/img/crossword"
                                    hobStyle="hobDark"
                                />

                            </div>
                            <div className="carousel-item">
                                <HobbiesBadge 
                                    hobbyName="Speed Cubing"
                                    img="/img/cubing"
                                    hobStyle="hobLight"
                                />
                            </div>
                            <div className="carousel-item">
                                <HobbiesBadge 
                                    hobbyName="Chess"
                                    img="/img/chess"
                                    hobStyle="hobDark"
                                />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselControl" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon bg-dark rounded" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>

                        <a className="carousel-control-next" href="#carouselControl" role="button" data-slide="next">
                            <span className="carousel-control-next-icon bg-dark rounded" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Hobbies;