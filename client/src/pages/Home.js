import React from "react";
//import { Link, useLocation } from "react-router-dom";
//import "./Home.css" 

function Home() {
    return (
        <div className="card container xl:max-w-screen-xl mx-auto py-12 px-6 text-center">
            <div className="card-body col-md-12 order-md-5">
                <h1 className="card-title" id="welcome">Welcome to Academics Excellence Tutorial Services.</h1>
                    <img className="card-img-top" src="\assets\81441040-education-teaching-learning-technology-and-people-concept-two-high-school-students-or-classmates-wit.jpg" alt="two-school-students"/>
                <br/>
                <p className="card-text" id="homeText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at augue ante. 
                    Ut vitae dui vitae enim malesuada porta ut ac ex. Pellentesque aliquet sodales eros, at suscipit quam rutrum non. 
                    Integer sit amet ex et libero sollicitudin volutpat. Ut rhoncus tincidunt imperdiet. Cras vehicula facilisis nunc a 
                    scelerisque. Sed justo risus, gravida id semper eget, mattis a massa. In quis aliquet elit.
                </p>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <a href="/contact" className="btn btn-primary">Contact Us</a>
                    </div>
                    <div className="col-md-6 mb-3">
                        <a href="/register" className="btn btn-primary">Register</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;