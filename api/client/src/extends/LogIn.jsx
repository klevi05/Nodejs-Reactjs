import React, { Component } from 'react';
import '../extends/log.css';
import library from '../images/blacklibrary.jpg'
import Header from './Header';

class LogIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      password: "",
      email: "",
      valide: false
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

    fetch('http://localhost:5000/user/logIn',{
      method: 'POST',
      body: JSON.stringify(databody),
      headers: {
          'Content-Type': 'application/json'
      },
  })
         .then(res =>{
           if(res.status === 400){
             console.log(res.statusText)
           }else if(res.status === 200){
             this.setState({valide:true})
           }
         } )
  }
 
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
                <label>
                    <p className="fonti">Userame</p> 
                    <input required className="input" type="email" name="Email" value={this.state.email} onChange={this.handleEmailChange}/>
                </label>
                <label>
                    <p className="fonti">Password</p> 
                    <input required className="input" type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                </label>
                <br/>
                <input className="button" type="submit" value="Log in" />
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
