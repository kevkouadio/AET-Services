import axios from "axios";

export default {
  // Gets all books
  getStudents: function() {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getStudent: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the book with the given id
  deleteStudent: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a book to the database
  saveStudent: function(userData) {
    return axios.post("/api/users", userData);
  }
};