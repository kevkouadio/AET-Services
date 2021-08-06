import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from '../pages/Register';
import Nav from '../components/Nav';
import Home from '../pages/Home';


const AppRouter = () => {

return (
  <BrowserRouter>
    <Nav/>
    <div className="container">
    <Switch>
      <Route exact path={"/register"}>
        <Register />
      </Route>
      <Route exact path={"/"}>
        <Home />
      </Route>
    </Switch>
  </div>
</BrowserRouter>  
  );
};

export default AppRouter;