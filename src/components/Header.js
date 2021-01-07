import React from 'react';
import Link from './Link';
import '../CSS/Header.css';

const Header=()=>{
  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
        <form className="form-inline">
           <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
           <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> 
        <span className="navbar-text">
          <a href="mailto: resumhic@support.ac.in"><h6>Email us: resumhic@support.ac.in</h6></a>
          <a href="tel:+917898979182"><h6>Contact us: +91-789-897-9182</h6></a>
        </span>
        <ul className="nav" id="social"> 
          <li className="nav-item">      
            <i className="fab fa-facebook fa-lg"></i>
          </li>
          <li className="nav-item">
            <i className="fab fa-instagram fa-lg"></i>
          </li>
          <li className="nav-item">
            <i className="fab fa-twitter fa-lg"></i>
          </li>
          <li className="nav-item">
            <i className="fab fa-pinterest-square fa-lg"></i>
          </li>
        </ul>
      </nav>
      <nav className="navbar navbar-expand-md navbar-light" style={{backgroundColor: 'lavender'}}>
      <a className="navbar-brand" href="#">Resumhic</a>
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button> */}

      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item active">
        <Link href="/" className="nav-link">
          Home
        </Link>
      </li> 
      <li className="nav-item"> 
        <Link href="/resume" className="nav-link">
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/cv" className="nav-link">
          CV
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/blog" className="nav-link">
          Blog
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/about" className="nav-link">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/login" className="nav-link">
          Login/signup
        </Link>
      </li>
    </ul>
    </div>
    </nav>
    </div>
  );
};

export default Header;