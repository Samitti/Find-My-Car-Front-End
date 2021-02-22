import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import CarList from './CarList';
import Car from './Car';
import SignIn from '../../components/auth/SignIn';
import SignUp from '../../components/auth/SignUp';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={CarList} />
      <Route path="/Cars" exact component={CarList} />
      <Route path="/Cars/:id" exact component={Car} />
      <Route path="/SignIn" exact component={SignIn} />
      <Route path="/SignUp" exact component={SignUp} />

    </Switch>
  </BrowserRouter>
);

export default Routes;
