import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from '../pages/Register';
import Nav from '../components/Nav';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Footer from '../components/Footer';
import StudentsList from '../pages/StudentsList';


const AppRouter = () => {

return (
  <BrowserRouter>
    <Nav/>
    <div className="container" id="page-container">
    <Switch>
      <Route exact path={"/register"}>
        <Register />
      </Route>
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route exact path={"/contact"}>
        <Contact />
      </Route>
      <Route exact path={"/studentslist"}>
        <StudentsList />
      </Route>
    </Switch>
  </div>
  <Footer/>
</BrowserRouter>  
  );
};

export default AppRouter;