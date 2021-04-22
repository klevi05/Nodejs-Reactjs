import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component{
    constructor(props){
        super(props)
        this.state={
            token: ''
        }
    }
    componentDidMount(){
        axios({
            method: 'GET',
            url: 'http://localhost:5000/user/posts'
        })
        .then( (response) => {
            this.setState({ token: response.data._id })
        })
        .catch( () => {
            this.props.history.push('/logIn')
        } )  
}

    render(){
        return(
            <React.Fragment>
                <h1>Posts</h1>
                <div>{ this.state.token }</div>
                <button onClick={async () => {
                    axios({
                        method: 'POST',
                        url: 'http://localhost:5000/user/remove'
                    }).then((response) =>{
                        if(response.data === ''){
                           this.props.history.push('/logIn')
                        }
                    }
                    )
                    }}>Remove</button>
            </React.Fragment>
            
        )
    }
}

export default Posts;