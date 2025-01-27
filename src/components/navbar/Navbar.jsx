import React from 'react';
import './navbar.css';
import home from '../../images/home.png';
import cart from '../../images/cartred.png';
import profile from '../../images/profile.png';
import vendor from '../../images/vendor.png';

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="navbar">
        <div className="nav-links">
          <a href="/home" className="links">
            <img src={home} width="30px" height="30px" alt="home" />
            <span>HOME</span>
          </a>
          <a href="/vendors" className="links">
            <img src={vendor} width="30px" height="30px" alt="vendor" />
            <span>VENDORS</span>
          </a>
          <a href="/cart" className="links">
            <img src={cart} width="30px" height="30px" alt="cart" />
            <span>CART</span>
          </a>
          <a href="/profile" className="links">
            <img src={profile} width="30px" height="30px" alt="profile" />
            <span>PROFILE</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
