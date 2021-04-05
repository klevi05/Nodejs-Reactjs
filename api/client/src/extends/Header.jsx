import React from 'react';
import './header.css';
import { Link } from 'react-router-dom'
function Header( {name} ){
    return(
      <React.Fragment>
      <div className='header'>
        <div className='header-title'>
          <h1 className="div-title">Library {name}</h1>
        </div>
        <div className='home-button'>
          <Link to='/'><button>Home</button></Link>
        </div>
      </div>
      </React.Fragment>
    )
}

export default Header;