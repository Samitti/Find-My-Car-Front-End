import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import CarList from './CarList';
import Car from './Car';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={CarList} />
      <Route path="/Cars" exact component={CarList} />
      <Route path="/Cars/:id" exact component={Car} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
