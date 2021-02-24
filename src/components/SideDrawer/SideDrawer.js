import React from 'react';
import { useSelector } from 'react-redux';
import './sideDrawer.css';

const SideDrawer = () => {
  useSelector(state => state.User.data.data);
  const loggedInUser = localStorage.getItem('user');

  const userLinks = (
    <ul>
      <li><a href="/" onClick={() => localStorage.setItem('user', '')}>Sign Out</a></li>
      <li><a href="/AddCar" id="home">Add New Car</a></li>
      <li><a href="/Favorite" id="home">My Favorite</a></li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li><a href="/SignIn">Sign In</a></li>
      <li><a href="/SignUp">Sign Up</a></li>
    </ul>
  );

  return (
    <nav className="side_drawer">
      { loggedInUser ? userLinks : guestLinks }
    </nav>
  );
};

export default SideDrawer;
