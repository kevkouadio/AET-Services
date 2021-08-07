import React from "react";
import Email from "../components/SendEmail"; 


function Contact() {
    return (
        <div className="row">
            <div className="col-sm-6">
                <div className="card">
                        <h1 className="card-title">Our Contact</h1>
                        <ul className="list-group">
                            <li className="list-group-item"><i className="fa fa-phone-square" aria-hidden="true"></i>: 999-999-9999</li>
                            <li className="list-group-item"><i className="fa fa-envelope" aria-hidden="true"></i>: aetservices@gmail.com</li>
                            <li className="list-group-item"><i className="fa fa-map-marker" aria-hidden="true"></i>: New Jersey, NJ </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <h1 className="card-title">Send us a message</h1>
                        <Email/>
                    </div>
                </div>
        </div>
    );
}

export default Contact;