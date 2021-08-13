import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';


function StudentsList() {
    const [students, setStudents] = useState([])
   
    // Load all students and store them with setBooks
    useEffect(() => {
        setTimeout(() => {
            $('#table_id').DataTable().destroy();
            loadStudents()
        }, 1000);
    }, [])

    useEffect(() => {
        $('#table_id').DataTable();
    },[students]);
  
    // Loads all students and sets them to students
    function loadStudents() {
      API.getStudents()
        .then(res => 
          setStudents(res.data)
        )
        .catch(err => console.log(err));
    };
    //console.log(students);

     // Deletes a student from the database with a given id, then reloads students from the db
    function deleteStudent(id) {
        API.deleteStudent(id)
        .then(res => loadStudents())
        .catch(err => console.log(err));
    };

    return (
        <div className="card">
                <table id="table_id" className="table table-light">
                    <thead className="table-dark" >
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Date of Birth</th>
                            <th>Grade</th>
                            <th>Subject</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        students.map(student => (
                            <tr key={student._id}>
                                <td>{student.first_name}</td>
                                <td>{student.last_name}</td>
                                <td>{student.birthdate}</td>
                                <td>{student.grade}</td>
                                <td>{student.subject}</td>
                                <td>
                                    <span className="delete-btn btn-danger" role="button" tabIndex="0" onClick={() => {if(window.confirm('Do you want to delete this student?')) {deleteStudent(student._id)}}}>
                                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                                    </span>
                                </td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
        </div> 
    );
};

$(document).ready(function() {
    $('#table_id').DataTable();
});

export default StudentsList;