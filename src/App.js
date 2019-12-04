import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import AgendaList from './AgendaList'
import Header from './Header'
import Login from './Login'

 class App extends Component {
  state = {
    signedin: false,
    username: ""
  }

  setUser = (userObj) => {
    console.log(userObj)
    this.setState({
      signedin: true,
      username: userObj.username
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
        <h1>{this.state.username}</h1>
        <Route exact path='/' ><Login setUser={this.setUser} /></Route>
        <Route path='/agendas' component={AgendaList} />
      </div>
    );
  }
}
export default App;