import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './sideDrawer.css';

const SideDrawer = () => {
  useSelector(state => state.User.data.data);
  const loggedInUser = localStorage.getItem('jwtoken');

  const userLinks = (
    <ul>
      <li><a href="/" onClick={() => localStorage.setItem('jwtoken', '')}>Sign Out</a></li>
      <li><Link to="/AddCar" id="home">Add New Car</Link></li>
      <li><Link to="/Favorite" id="home">My Favorite</Link></li>
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
