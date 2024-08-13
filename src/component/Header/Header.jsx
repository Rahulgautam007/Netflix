import React from 'react';
import logo from '../../assets/Netflix.png';
import {Link} from 'react-router-dom'
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <nav className="header">
      <img src={logo} alt="Netflix Logo" />

      <div>
        <Link to='/'>TV Shows</Link>
        <Link to='/'>Movies</Link>
        <Link to='/'>Recently Added</Link>
        <Link to='/'>My List</Link>
      </div>
      <FaSearch />
    </nav>
  );
}

export default Header;
