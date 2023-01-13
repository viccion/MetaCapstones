import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './assets/Logo.svg';

function Nav() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <img src={Logo} alt="Logo" style={{marginLeft:"20px"}} />
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav" style={{marginLeft:"30px"}}>
        <ul className="navbar-nav" style={{alignItems:'center', alignContent:'center', justifyContent:'center' }}>
          <li className="nav-item active" style={{marginLeft:"50px"}}>
          <a className="nav-link" to="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item" style={{marginLeft:"20px"}}>
            <a className="nav-link" to="">About</a>
          </li>
          <li className="nav-item" style={{marginLeft:"20px"}}>
            <a className="nav-link" to="">Menu</a>
          </li>
          <li className="nav-item" style={{marginLeft:"20px"}}>
            <a className="nav-link" to="">Reservation</a>
          </li>
          <li className="nav-item" style={{marginLeft:"20px"}}>
            <a className="nav-link" to="">Order Online</a>
          </li>
          <li className="nav-item" style={{marginLeft:"20px"}}>
            <a className="nav-link" to="/">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;