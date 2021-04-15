import React from 'react';
import './header.css';
import { Link } from 'react-router-dom'
function Header( {name, btn1, btn2, path1, path2} ){
    return(
      <React.Fragment>
      <div className='header'>
        <div className='header-title'>
          <h1 className="div-title">Library {name}</h1>
        </div>
        <div className='home-button'>
          <Link to={path1}><button>{btn1}</button></Link>
          <Link to={path2}><button> {btn2} </button></Link>
        </div>
      </div>
      </React.Fragment>
    )
}

export default Header;