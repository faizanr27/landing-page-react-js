import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="logo">InnoSoft Solutions</a>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
