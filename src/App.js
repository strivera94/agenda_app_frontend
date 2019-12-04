import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom'
import AgendaList from './AgendaList'
import Header from './Header'
import Login from './Login'

 class App extends Component {
  state = {
    signedin: false,
    username: {}
  }

  setUser = (userObj) => {
    console.log(userObj)
    this.setState({
      signedin: true,
      username: userObj
    }, function(){
      localStorage.setItem('signedIn', 'true')
      localStorage.setItem('user', JSON.stringify(userObj))
    })
  }

  // componentDidMount(){
  //   fetch(`http://localhost:3000/users`, {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json",
  //     "accept": "application/json"
  //   },
  //   body: JSON.stringify({
  //       "username": this.state.username  
  //   })
  //   })
  //   .then(r => r.json())
  //   .then(user => {
  //     console.log(user)
  //   })
  // }

  render() {
    console.log(localStorage)
    return (
      <div>
        <Header />
        <h1>{this.state.signedin}</h1>
        {this.state.signedin ? <AgendaList /> : <Login setUser={this.setUser} />}
      </div>
    );
  }
}
export default App;