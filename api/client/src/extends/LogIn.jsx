import React, { Component } from 'react';
import '../extends/log.css';
import library from '../images/blacklibrary.jpg'
import Header from './Header';

class LogIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      password: "",
      username: "",
      users: []
    }

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //ComponentDidMount acts like a GET method
  componentDidMount(){
    fetch('http://localhost:9000/get/')
         .then(res => res.json())
         .then(data => {
           this.setState({
             users: data
           });
         } );
  };
  //POST Method
  handleSubmit(e){
    e.preventDefault();
    try {
      console.log("hello")
    } catch (error) {
      console.log(error)
    }
 };

 handlePasswordChange(event){
  this.setState({ password : event.target.value})};
handleUsernameChange(event){
  this.setState({ username: event.target.value });
};

  render(){
  return (
    <React.Fragment>
      <Header name='Log In'/>
    <div className='container'>
      <div className="form-area">
            <form className='outer-box' onSubmit={this.handleSubmit}>
              <h2 className="log-in-label">Log In</h2>
                <label>
                    <p className="fonti">Userame</p> 
                    <input required className="input" type="text" name="Email" value={this.state.username} onChange={this.handleUsernameChange}/>
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
