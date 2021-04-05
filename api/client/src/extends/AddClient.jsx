import React, { Component } from 'react';
import '../extends/form.css';
import library from '../images/globe.jpg'
import Header from './Header';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      password: "",
      email: "",
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //POST Method
  handleSubmit(){
     let databody = {
         name: this.state.name,
         password: this.state.password,
         email : this.state.email
     }
    
     fetch('http://localhost:9000/posts/', {
             method: 'POST',
             body: JSON.stringify(databody),
             headers: {
                 'Content-Type': 'application/json'
             },
         })
         .then(res => res.json())
         .then(data => console.log(data));
 };

 handleNameChange(event){
   this.setState({ name : event.target.value });
 };
 handlePasswordChange(event){
  this.setState({ password : event.target.value});
};
handleEmailChange(event){
  this.setState({ email: event.target.value });
};


  render(){
  return (
    <React.Fragment>
      <Header name='Sign In'/>
    <div className='container'>
      <div className="form-area">
            <form className='outer-box' onSubmit={this.handleSubmit}>
            <h2 className="signIn-in-label">Sign In</h2>
                <label >
                    <p className="fonti">Username</p> 
                    <input required className="input" type="text" name="name" value={this.state.name} onChange={this.handleNameChange}/>
                </label>
                <label>
                    <p className="fonti">Email</p> 
                    <input required className="input" type="text" name="Email" value={this.state.email} onChange={this.handleEmailChange}/>
                </label>
                <label>
                    <p className="fonti">Password</p> 
                    <input required className="input" type="password" name="pasword" value={this.state.password} onChange={this.handlePasswordChange}/>
                </label>
                <br/>
                <input className="button" type="submit" value="Sign In" />
            </form>
          </div>
            <div className="Picture">
              <img className="library-pic" src={library} alt="library"/>
            </div>
        </div>
        </React.Fragment>
  );
}}

export default Form;
