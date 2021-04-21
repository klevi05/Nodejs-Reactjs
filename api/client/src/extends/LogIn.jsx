import React, { Component} from 'react';
import { Link,} from 'react-router-dom';
import '../extends/log.css';
import library from '../images/blacklibrary.jpg';
import Header from './Header';
import axios from 'axios';

class LogIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      password: "",
      email: "",
      errors:"",
      val: false
    }

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //POST Method
  handleSubmit(e){
    e.preventDefault();
    const databody={
      email: this.state.email,
      password: this.state.password,
    };
    axios({
      method: 'post',
      url: 'http://localhost:5000/user/logIn',
      headers: {'Content-Type': 'application/json'},
      data: databody
    }).then((response) => {
      if (response.status === 200) {
        this.props.history.push('/posts')
      }
    }).catch(() => {
      this.setState({ errors: "Email or password is not valid!"})
      this.setState({password: ""})
    })
  };
 handleEmailChange(event){
  this.setState({ email : event.target.value})};
handlePasswordChange(event){
  this.setState({ password: event.target.value });
};

  render(){
  return (
    <React.Fragment>
      <Header name='Log In' btn1='Home' btn2='Sign Up' path1="/" path2="/addUser" />
    <div className='container'>
      <div className="form-area">
            <form className='outer-box' onSubmit={this.handleSubmit}>
              <h2 className="log-in-label">Log In</h2>
              <div className='errors'>{ this.state.errors }</div>
                <label>
                    <p className="fonti">Email</p> 
                    <input required className="input" type="email" name="Email" value={this.state.email} onChange={this.handleEmailChange}/>
                </label>
                <label>
                    <p className="fonti">Password</p> 
                    <input required className="input" type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                </label>
                <br/>
                <input className="button" type="submit" value="Log in" />
                <p className='ifSign'>If you don't have an acount<Link className='toSign' to="/addUser">Sign up</Link></p>
            </form>
          </div>
            <div className="Picture">
              <img className="library-pic" src={library} alt="library"/>
            </div>
        </div>
        </React.Fragment>
  );
}}

export default LogIn;
