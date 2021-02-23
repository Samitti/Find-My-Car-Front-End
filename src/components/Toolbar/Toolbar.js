import React from 'react';
import { useSelector } from 'react-redux';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => {
  useSelector(state => state.User.data.data);
  const loggedInUser = localStorage.getItem('user');

  const userLinks = (
    <ul>
      <li><a href="/AddCar" id="home">Add Car</a></li>
      <li><a href="/" onClick={() => localStorage.setItem('user', '')}>Sign Out</a></li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li><a href="/SignIn">Sign In</a></li>
      <li><a href="/SignUp">Sign Up</a></li>
    </ul>
  );

  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div className="toggle_toolbar_button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar_logo"><a href="/">Cars</a></div>
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
