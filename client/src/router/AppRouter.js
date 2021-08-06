import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from '../pages/Register';
import Header from '../components/Header';
// import SecondStep from '../components/SecondStep';
// import ThirdStep from '../components/ThirdStep';


const AppRouter = () => {
  const [user, setUser] = useState({});

  const updateUser = (data) => {
    setUser((prevUser) => ({ ...prevUser, ...data }));
};

const resetUser = () => {
  setUser({});
};

return (
  <BrowserRouter>
  <div className="container">
    <Header />
    <Switch>
      <Route exact path={["/register"]}>
          <Register />
      </Route>
      {/* <Route
        render={(props) => (
          <SecondStep {...props} user={user} updateUser={updateUser} />
        )}
        path="/second"
      />
      <Route
        render={(props) => (
          <ThirdStep {...props} user={user}  />
        )}
        path="/third"
      /> */}
    </Switch>
  </div>
</BrowserRouter>  
  );
};

export default AppRouter;