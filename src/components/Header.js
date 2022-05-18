import React from 'react';
import logo from '../images/logo.png';

function Header() {
  return (
    <div className="header">
        <div className="headerLogo">
            <img src={logo} alt="Allo logo" />
            <h1>Allo</h1>
        </div>
        <button>Clear Chat X</button>
    </div>
  )
}

export default Header