import React, {useContext} from 'react';
import logo from '../images/logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import ResponseContext from '../ResponseContext';

function Header() {
    const { setResponses } = useContext(ResponseContext);

  return (
    <div className="header">
        <div className="headerLogo">
            <img src={logo} alt="Allo logo" />
            <h1>Allo - Fun with AI</h1>
        </div>
        <button onClick={() => {
            setResponses([])
            window.localStorage.removeItem('RESPONSES');
            }}>Clear &nbsp; <FontAwesomeIcon className="headerIcon" icon={faXmark} /></button>
    </div>
  )
}

export default Header