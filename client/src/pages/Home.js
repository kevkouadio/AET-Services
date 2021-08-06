import React from "react";
import { Link, useLocation } from "react-router-dom";
//import "./Home.css" 

function Home() {
    return (
        <div className="card container xl:max-w-screen-xl mx-auto py-12 px-6 text-center">
            <div className="card-body col-md-12 order-md-5">
                <h1 className="card-title">Welcome to Academics Excellence Tutorial Services.</h1>
                <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at augue ante. 
                    Ut vitae dui vitae enim malesuada porta ut ac ex. Pellentesque aliquet sodales eros, at suscipit quam rutrum non. 
                    Integer sit amet ex et libero sollicitudin volutpat. Ut rhoncus tincidunt imperdiet. Cras vehicula facilisis nunc a 
                    scelerisque. Sed justo risus, gravida id semper eget, mattis a massa. In quis aliquet elit.
                </p>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <a href="/contact" class="btn btn-primary">Contact Us</a>
                    </div>
                    <div className="col-md-6 mb-3">
                        <a href="/register" class="btn btn-primary">Register</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;