import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import AgendaList from './AgendaList'
import Header from './Header'
import Login from './Login'

 class App extends Component {
  state = {
    signedin: false,
    username: "",
    user_id: null 
  }

  setUser = (userObj) => {
    this.setState({
      signedin: true,
      username: userObj.username,
      user_id: userObj.id
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
    return (
      <div>
        <Header />
        <h1>{this.state.signedin}</h1>
        {this.state.signedin ? <AgendaList userId={this.state.user_id} /> : <Login setUser={this.setUser} />}
      </div>
    );
  }
}
export default App;