import React from 'react';
import {
  BrowserRouter, Switch, Route,

} from 'react-router-dom';

// import CarList from './redux/containers/CarList';
import LandingPage from './containers/LandingPage';
// import FavoriteCarList from './redux/containers/FavoriteCarList';
// import Car from './redux/containers/Car';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
// import AddCar from './components/AddCar';
import './App.css';
import CarsContainer from './containers/CarsContainer';
import FavsContainer from './containers/FavsContainer';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <main className="app-main">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/Cars" exact component={CarsContainer} />
          <Route path="/Favorite" exact component={FavsContainer} />
          <Route path="/SignIn" exact component={SignIn} />
          <Route path="/SignUp" exact component={SignUp} />
          {/* <Route path="/" exact component={LandingPage} />
          <Route path="/Cars" exact component={CarList} />
          <Route path="/Favorite" exact component={FavoriteCarList} />
          <Route path="/Cars/:id" exact component={Car} />
          <Route path="/AddCar" exact component={AddCar} /> */}
        </Switch>
      </main>
    </div>
  </BrowserRouter>
);

export default App;
