import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/about">sobre mim</Link>
        <Link to="/projects">projetos</Link>
      </div>
    </nav>
  );
}

export default NavBar;
