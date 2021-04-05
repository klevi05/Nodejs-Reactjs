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
      verified: false,
      users: []
    }

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //ComponentDidMount acts like a GET method
  componentDidMount(){
    fetch('http://localhost:9000/get/')
         .then(res => res.json())
         .then(data => {
           this.setState({
             users: data
           })
         } );
  };
  //POST Method
  handleSubmit(e){
    e.preventDefault();
    this.state.users.map( (data) => {
       if(data.password === this.state.password){
        this.props.history.push('/posts');
       }else{
         console.log('error')
       }
       } )
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
      <Header name='Log In'/>
    <div className='container'>
      <div className="form-area">
            <form className='outer-box' onSubmit={this.handleSubmit}>
              <h2 className="log-in-label">Log In</h2>
                <label>
                    <p className="fonti">Email</p> 
                    <input required className="input" type="text" name="Email" value={this.state.email} onChange={this.handleEmailChange}/>
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
