import React, { Component } from 'react';

class Login extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: event.target.username.value
            })
        })
        .then(r => r.json())
        .then(userObj => {
            this.props.setUser(userObj)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>
                        Username: 
                        <input 
                          type='text'
                          name='username'
                        /> 
                    <input type='submit' value='Log-in'/>
                    </label>
                </form>
            </div>
        );
    }
}

export default Login;