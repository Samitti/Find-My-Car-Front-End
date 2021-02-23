import { Component } from 'react';
import SideDrawer from './components/SideDrawer/SideDrawer';
// import NavBar from './components/NavBar';
import Toolbar from './components/Toolbar/Toolbar';
import Routes from './redux/containers/Routes';
import Backdrop from './components/Backdrop/Backdrop';
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
      <div className="App">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        {sideDrawer}
        {backdrop}
        <main className="app-main">
          <Routes />
        </main>
      </div>
    );
  }
}

export default App;
