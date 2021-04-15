import React from 'react';
import './home.css';
import Header from './Header';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <React.Fragment>
            <Header name='Home' btn1='Log In' btn2='Sign Up' path1="/logIn" path2="/addUser" />
            <div className='home-container'>
                <div className="inside-container">
                    <div className="logIn">
                        <h1>Log In</h1>
                        <p>If you want to log into a user account of the library click the button down bellow.</p>
                        <Link to='/logIn'><button>Go to</button></Link>
                    </div>
                    <div className="addUser">
                        <h1>Sign In</h1>
                        <p>If you are new to our library and want to sign in click the button bellow.</p>
                        <Link to='/addUser'><button>Go to</button></Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Home;