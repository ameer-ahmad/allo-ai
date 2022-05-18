import React from 'react';
import logo from '../images/logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="header">
        <div className="headerLogo">
            <img src={logo} alt="Allo logo" />
            <h1>Allo - Fun with AI</h1>
        </div>
        <button>Clear Chat &nbsp; <FontAwesomeIcon className="headerIcon" icon={faXmark} /></button>
    </div>
  )
}

export default Header