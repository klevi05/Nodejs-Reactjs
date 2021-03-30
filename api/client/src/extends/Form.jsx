import React, { Component } from 'react';
import '../extends/form.css';
import library from '../images/library.jpeg'

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      lastname: "",
      email: ""
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLastnameChange = this.handleLastnameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //ComponentDidMount acts like a GET method
  componentDidMount(){
    fetch('http://localhost:9000/get/')
         .then(res => res.json())
         .then(data => console.log(data));
  };
  //POST Method
  handleSubmit(){
     let databody = {
         name: this.state.name,
         lastname: this.state.lastname,
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
 handleLastnameChange(event){
  this.setState({ lastname : event.target.value});
};
handleEmailChange(event){
  this.setState({ email: event.target.value });
};


  render(){
  return (
    <div className='container'>
      <div className="form-area">
            <form className='outer-box' onSubmit={this.handleSubmit}>
                <label >
                    <p className="fonti">Name</p> 
                    <input required className="input" type="text" name="name" value={this.state.name} onChange={this.handleNameChange}/>
                </label>
                <label>
                    <p className="fonti">Lastname</p> 
                    <input required className="input" type="text" name="lastname" value={this.state.lastname} onChange={this.handleLastnameChange}/>
                </label>
                <label>
                    <p className="fonti">Email</p> 
                    <input required className="input" type="text" name="Email" value={this.state.email} onChange={this.handleEmailChange}/>
                </label>
                <br/>
                <input className="button" type="submit" value="Add to DB" />
            </form>
          </div>
            <div className="Picture">
              <img className="library-pic" src={library} alt="library"/>
            </div>
        </div>
  );
}}

export default Form;
