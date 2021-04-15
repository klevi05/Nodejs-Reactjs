import React from 'react';
import { Link } from 'react-router-dom';
import '../extends/form.css';
import library from '../images/globe.jpg';
import Header from './Header';


class Form extends React.Component {
 constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      problem: "",
      stat: false
    };
    
    this.handleuserNameChange = this.handleuserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  //POST Method
  handleSubmit = event =>{
    event.preventDefault();
    let databody = {
         username: this.state.username,
         email : this.state.email,
         password: this.state.password
     }
    
     fetch('http://localhost:5000/user/register', {
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((res) =>{
          if(res.status === 400){
            this.setState({password: ""});
            this.setState({problem:"Email or password is not right!"});
          }else if(res.status === 200){
            this.setState({stat:true});
            window.location.reload(false);
          }else{
            console.log('error')
          }
        })
 };

 handleuserNameChange(event){
   this.setState({ username : event.target.value });
 };
 
 handlePasswordChange(event){
  this.setState({ password: event.target.value })};

handleEmailChange(event){
  this.setState({ email: event.target.value });
};
  render(){
  return (
    <React.Fragment>
      <Header name='Sign Up' btn1='Home' btn2='Log In' path1="/" path2="/logIn" />
    <div className='container'>
      <div className="form-area">
            <form className='outer-box' onSubmit={this.handleSubmit}>
            <h2 className="signIn-in-label">Sign Up</h2>
                <label >
                    <p className="fonti">Username</p> 
                    <input required className="input" type="text" placeholder="Name" name="name" value={this.state.username} onChange={this.handleuserNameChange}/>
                    <div className="problem">{this.state.problem}</div>
                </label>
                <label>
                    <p className="fonti">Email</p> 
                    <input required className="input" type="email" name="Email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
                    
                </label>
                <label>
                    <p className="fonti">Password</p> 
                    <input required className="input" type="password" name="pasword" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
                </label>
                <br/>
                <input  className="button" type="submit" value="Sign Up" />
                <p className='ifLoged'>If you have an acount click here <Link className='toLog' to='/logIn' >Log In</Link></p>
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
