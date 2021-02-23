import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = () => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <DrawerToggleButton />
      </div>
      <div className="toolbar_logo"><a href="/">My Car</a></div>
      <div className="spacer" />
      <div className="toolbar_navigation_items">
        <ul>
          <li><a href="/">Log In</a></li>
          <li><a href="/">Log Out</a></li>

        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
