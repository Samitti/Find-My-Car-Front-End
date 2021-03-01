import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => {
  useSelector(state => state.User.data.data);
  const loggedInUser = localStorage.getItem('jwtoken');

  const userLinks = (
    <ul>
      <li><Link to="/AddCar" id="home">Add Car</Link></li>
      <li><a href="/" onClick={() => localStorage.setItem('jwtoken', '')}>Sign Out</a></li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li><Link to="/SignIn">Sign In</Link></li>
      <li><Link to="/SignUp">Sign Up</Link></li>
    </ul>
  );

  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div className="toggle_toolbar_button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar_logo"><Link to="/">Cars</Link></div>
        <div className="spacer" />
        <div className="toolbar_navigation_items">
          <ul>
            { loggedInUser ? userLinks : guestLinks }
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default toolbar;
