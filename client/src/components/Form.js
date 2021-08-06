import React from "react";
//import "./App.css";
// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group ">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ marginBottom: 50 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

export function Select(props) {
  return (
    <select className="form-select col-md-12" style={{ height: "40px", marginBottom: 10 }} {...props}>
            <option defaultValue >Select your grade</option>
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="4th">4th</option>
            <option value="5th">5th</option>
            <option value="6th">6th</option>
            <option value="7th">7th</option>
            <option value="8th">8th</option>
            <option value="9th">9th</option>
            <option value="10th">10th</option>
            <option value="11th">11th</option>
            <option value="11th">11th</option>
      </select>
  );
}

export function SubjectSelect(props) {
  return (
    <select className="form-select col-md-12" style={{ height: "40px", marginBottom: 10 }} {...props}>
            <option defaultValue>Select your Subject</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
    </select>
    
  );
}