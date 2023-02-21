import React, {Component} from 'react';
import emailjs from 'emailjs-com';
import './fonts.css';
import './Contact.css';
import { init } from 'emailjs-com';
init("user_LUOmJ5y5Wt6QBzhWy3cya");

class Contact extends Component{
    constructor(){
        super();
        this.state = {
            modalText: "Bado"
        }
        this.SendEmail = this.SendEmail.bind(this);
        /**
         * Not sure what binding does.
         * But It fixed my error TypeError.
         * Source: https://swsinswsin.medium.com/typeerror-cannot-read-property-state-of-undefined-ab77e924f992
         * Error name: TypeError: Cannot read property 'state' of undefined
         */
    }

    //function to send user email input to emailjs then to my gmail
    SendEmail(e){
        e.preventDefault();
    
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const userNameVal = e.target[0].value;
        const userEmailVal = e.target[1].value;
        const subjectVal = e.target[2].value;
        const textAreaVal = e.target[3].value;
    
        if(userNameVal !== "" && userEmailVal !== "" && subjectVal !== "" && textAreaVal !== ""){
            
            if(re.test(userEmailVal)){
                return(
                    <div>
                        {this.setState({modalText : "Email Sent. Thank You for your Feedback!"})}
                        
                        {
                            emailjs.sendForm('service_k2y2y9g', 'template_8fd9if3', e.target, 'user_LUOmJ5y5Wt6QBzhWy3cya')
                            .then((result) => {
                                console.log(result.text);
                            }, (error) => {
                                console.log(error.text);
                            })
                        }
                        {e.target.reset()}
                    </div>
                );
            }else{
                return(
                    <div>
                        {this.setState({modalText : "Invalid Email!"})}
                        
                    </div>
                );
                
                
            }
        }
        else{
            return(
                <div>
                    {this.setState({modalText : "Fill In What's Missing"})}
    
                </div>
                
            );
            
        }
    }

    
    render(){
        return(
            <div id="contactBack" className="contactBackground">
                <h5 className="mainFont contactTitle text-center text-white p-5 m-0">
                    <strong>CONTACT ME</strong>
                </h5>
                <div className="contact form-inline">
                    
                    <div className="row w-100 align-items-center">
                        <div className="col-sm-8">
                            <div className="row">
                                {/*Email Contact Section */}
                                <div className="emailSection m-0">
                                    <div className="card card-body text-dark p-2 border-0 bg-transparent">

                                        {/*Email me form */}
                                        <form className="was-validated" onSubmit={(e) => this.SendEmail(e)} noValidate>

                                            {/*The name input section */}

                                            <div className="form-group mb-2">
                                                <label className="formLabelFont text-white" for="userName">Name</label>
                                                <input className="formInputFont text-truncate form-control w-100" style={{height: "50px"}} placeholder="Mr. Robot" id="userName" type="text" name="user_name" required />
                                                <div className="invalid-feedback">
                                                    Enter Name.
                                                </div>
                                            </div>
                                            
                                            {/*The email input section */}
                                            <div className="form-group mb-2">
                                                <label className="formLabelFont text-white" for="userEmail">Email</label>
                                                <input className="formInputFont text-truncate form-control w-100" style={{height: "50px"}} placeholder="elliotAlderson@allsafe.com" id="userEmail" type="email" name="user_email" required/>
                                                <div className="invalid-feedback">
                                                    Enter email.
                                                </div>
                                            </div>

                                            {/*The subject input section */}
                                            <div className="form-group mb-2">
                                                <label className="formLabelFont text-white" for="subjectID">Subject</label>
                                                <input className="formInputFont text-truncate form-control w-100" style={{height: "50px"}} placeholder="FSociety" id="subjectID" type="text" name="subject" required/>
                                                <div className="invalid-feedback">
                                                    A subject is required.
                                                </div>
                                            </div>

                                            {/*The message input section */}
                                            <div className="form-group mb-2">
                                                <label className="formLabelFont text-white" for="textArea">Message</label>
                                                <textarea className="formInputFont form-control w-100" placeholder="Leave a Comment here" id="textArea" name="message" style={{height: "130px", minHeight: "90px"}} required/>
                                                <div className="invalid-feedback">
                                                    A message is required.
                                                </div>
                                            </div>

                                            {/*Send button section*/}
                                            <button className="btn btn-outline-light btn-sm p-0 m-0 float-right" type="button" data-bs-toggle="modal" data-bs-target="#contactModal">
                                                <input className="buttonFont btn btn-outline-light btn-sm" name="submit" value="Send" type="submit" />
                                            </button>
                                            
                                        </form>
                                        
                                        {/*Custom Modal */}
                                        <div className="modal fade" id="contactModal" data-bs-backdrop="static" aria-hidden="true" tabIndex="-1">
                                            <div className="modal-dialog modal-dialog-centered">
                                                <div className="modal-content">
                                                    {/*Modal Header */}
                                                    <div style={{backgroundColor: "#802e17"}}>
                                                        <button type="button" className="btn-close btn-light bg-light m-2" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>

                                                    {/*Separator */}
                                                    <div style={{height: "1px", backgroundColor: "#e8e8e8"}}></div>

                                                    {/*Modal Body */}
                                                    <div className="modal-body text-center">
                                                        <p className="p-0 m-0">{this.state.modalText}</p>
                                                    </div>

                                                    {/*Separator */}
                                                    <div style={{height: "1px", backgroundColor: "#e8e8e8"}}></div>

                                                    {/*Modal Footer */}
                                                    <div>
                                                        <button id="closeModalId" className="btn btn-sm m-2 float-right" style={{backgroundColor: "#802e17", color: "white"}} type="button" data-bs-dismiss="modal">
                                                            Close
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white" style={{height: '2px'}}></div>
                                </div> 
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="row text-center">
                                {/*LinkedIn Contact Section */}
                                <div className="col-4 p-3 text-white" style={{height: "55px"}}>
                                    <a href="https://www.linkedin.com/in/oliver-nderitu-b36178201/" rel="noreferrer" target="_blank">
                                        <img src="./img/linkedInLogo.png" height="40px" width="40px"  alt="linkedIn" />
                                    </a>
                                </div>
                            

                                {/*GitHub Contact Section */}
                                <div className="col-4 p-3 text-white" style={{height: "55px"}}>
                                    <a href="https://github.com/oliver-wahome" rel="noreferrer" target="_blank">
                                        <img className="bg-white rounded-circle" src="./img/githubLogo.png" height="40px" width="40px"  alt="github" />
                                    </a>
                                </div>

                                {/*Instagram Contact Section */}
                                <div className="col-4 p-3 text-white" style={{height: "55px"}}>
                                    <a href="https://www.instagram.com/oliverwahome/" rel="noreferrer" target="_blank">
                                        <img src="./img/instagramLogo.png" height="40px" width="40px"  alt="instagram" />
                                    </a> 
                                </div>
                            </div>
                            <div className="row">
                                {/*Phone Contact Section */}
                                {/* <div className="col-12 pt-3 text-center">
                                    <div className="contactNumberFont p-0 text-white">
                                        Kenyan Number: +254 708084974
                                    </div>
                                    <div className="contactNumberFont p-0 text-white">
                                        South African Number: +27 723729234
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        
                        
                    </div>

                </div>
                <p className="aboutDescFont contactTitle text-center text-white p-5 pb-0 m-0">
                    <strong>All Rights Reserved &copy; Oliver Wahome Nderitu 2021</strong>
                </p> 
            </div>
        )
    }
}
export default Contact;