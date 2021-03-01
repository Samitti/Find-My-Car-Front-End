import React, { Component } from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import SideDrawer from './components/SideDrawer/SideDrawer';
// import NavBar from './components/NavBar';
import Toolbar from './components/Toolbar/Toolbar';
import Backdrop from './components/Backdrop/Backdrop';

import CarList from './redux/containers/CarList';
import LandingPage from './redux/containers/LandingPage';
import FavoriteCarList from './redux/containers/FavoriteCarList';
import Car from './redux/containers/Car';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AddCar from './components/AddCar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false,
    };
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => ({ sideDrawerOpen: !prevState.sideDrawerOpen }));
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }

  render() {
    let sideDrawer;
    let backdrop;
    const { sideDrawerOpen } = this.state;
    if (sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop />;
    }
    return (
      <BrowserRouter>
        <div className="App">
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          {sideDrawer}
          {backdrop}
          <main className="app-main">
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/Cars" exact component={CarList} />
              <Route path="/Favorite" exact component={FavoriteCarList} />
              <Route path="/Cars/:id" exact component={Car} />
              <Route path="/SignIn" exact component={SignIn} />
              <Route path="/SignUp" exact component={SignUp} />
              <Route path="/AddCar" exact component={AddCar} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
