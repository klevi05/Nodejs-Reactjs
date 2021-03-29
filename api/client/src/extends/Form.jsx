import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      quote: "",
      post: {}
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleQuoteChange = this.handleQuoteChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(){
     let databody = {
         name: this.state.name,
         quote: this.state.quote
     }
    
     fetch('http://localhost:9000/posts', {
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
   this.setState({ name : event.target.value});
 };
 handleQuoteChange(event){
  this.setState({ quote : event.target.value});
};
handleGET(){
  fetch('http://localhost:9000')
  .then(response => response.json())
  .then(data => console.log(data.json()))
};

  render(){
  return (
    <div className='container'>
            <form className='input-group mb-3' onSubmit={this.handleSubmit}>
                <label >
                    Name
                    <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange}/>
                </label>
                <label>
                    quote
                    <input type="text" name="quote" value={this.state.quote} onChange={this.handleQuoteChange}/>
                </label>
                <input type="submit" value="Add to DB" />
            </form>
            <button type="button" onClick={this.handleGET}>GET</button> 
        </div>
  );
}}

export default Form;
