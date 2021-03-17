import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Toolbar.css';

const toolbar = () => {
  useSelector(state => state.user);

  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div className="toolbar_logo">
          <Link to="/">Cars</Link>
        </div>
        <div className="toolbar_navigation_items">
          <ul>
            <li><Link to="/Favorite" id="home">My Favorite</Link></li>
            <li><Link to="/AddCar" id="home">Add Car</Link></li>
            <li><a href="/" onClick={() => localStorage.setItem('jwtoken', '')}>Sign Out</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default toolbar;
