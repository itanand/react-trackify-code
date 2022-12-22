import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
          <span className="brand-text font-weight-light">Trackify 2.0</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <a href="#" className="d-block">Anand Mohan</a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav  nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <li className="nav-item ">
                <a href="#" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    <Link to="/">
                      Dashboard
                    </Link>
                  </p>
                </a>
              </li>
            </ul>
            <ul className="nav ">
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  <p>
                    <Link to="/myprofile">
                      My Profile
                    </Link>
                  </p>
                </a>
              </li>
            </ul>
            <ul className="nav ">
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  <p>
                    <Link to="/myprofile">
                      Registerd User
                    </Link>
                  </p>
                </a>
              </li>
            </ul>
            <ul className="nav ">
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  <p>
                    <Link to="/myprofile">
                      Referrals
                    </Link>
                  </p>
                </a>
              </li>
            </ul>
            <ul className="nav ">
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  <p>
                    <Link to="/myprofile">
                      My Profile
                    </Link>
                  </p>
                </a>
              </li>
            </ul>
            <ul className="nav ">
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  <p>
                    <Link to="/myprofile">
                      My Profile
                    </Link>
                  </p>
                </a>
              </li>
            </ul>


          </nav>
        </div>
      </aside>
    </div>
  )
}

export default Menu
