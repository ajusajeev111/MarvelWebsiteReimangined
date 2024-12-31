import React from 'react';
import './navbar.css';
import marvelLogo from '../../assets/LOGO.png';
import search from '../../assets/search logo.png';

const Navbar = ({ isScrolled }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={marvelLogo} alt="Marvel" />
      </div>
        <div className={`navbar-links ${isScrolled ? 'bold-links' : ''}`}>
        <div className='navbar-links-home'>HOME</div>
        <div className='navbar-links-characters'>CHARACTERS</div>
        <div className='navbar-links-tvshows'>TV SHOWS</div>
        <div className='navbar-links-more'>MORE</div>
      </div>
      <div className="navbar-actions">
        <img className="search" src={search} alt="Search" />
        <button className="login-button">LOGIN</button>
      </div>
    </nav>
  );
};

export default Navbar;
