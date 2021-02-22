import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import CarList from './CarList';
import Car from './Car';
import SignIn from '../../components/auth/SignIn';
import SignUp from '../../components/auth/SignUp';
import AddCar from '../../components/AddCar';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={CarList} />
      <Route path="/Cars" exact component={CarList} />
      <Route path="/Cars/:id" exact component={Car} />
      <Route path="/SignIn" exact component={SignIn} />
      <Route path="/SignUp" exact component={SignUp} />
      <Route path="/AddCar" exact component={AddCar} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
