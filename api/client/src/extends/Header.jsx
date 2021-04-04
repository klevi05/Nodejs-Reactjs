import React from 'react';
import './header.css';

function Header( {name} ){
    return(
      <div className='header'>
        <h1 className="div-title">Library {name}</h1>
      </div>
    )
}

export default Header;