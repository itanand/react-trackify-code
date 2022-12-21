import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars" /></a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a to="/" className="nav-link"><Link to="/">Home</Link></a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a to="/contact" className="nav-link"><Link to="/contact" >Contact</Link></a>
          </li>
        </ul>
        {/* SEARCH FORM */}
        <ul className="navbar-nav ml-auto">
          <form className="form-inline ml-3">
            <div className="input-group input-group-sm">
              <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
              <div className="input-group-append">
                <button className="btn btn-navbar" type="submit">
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
          </form>
          {/* Right navbar links */}
          {/* <li ClassName="nav-item">
            <div ClassName="dropdown">
              <button ClassName="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              </button>
              <div ClassName="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a ClassName="dropdown-item" href="login.php">Login</a>
                <a ClassName="dropdown-item" href="#">Something else here</a>
                <form action="code.php" method="POST" >
                  <button type="submit" name="logout_btn" ClassName="dropdown-item">Logout</button>
                </form>
              </div>

            </div>
          </li> */}

          {/* Messages Dropdown Menu */}
          <li className="nav-item">
            <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#">
              <i className="fas fa-th-large" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header