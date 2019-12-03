import React, { Component } from 'react';
import AgendaList from './AgendaList'
import Header from './Header'
import Login from './Login'

 class App extends Component {

  render() {
    
    return (
      <div>
        <Header />
        <Login />
        <AgendaList />
      </div>
    );
  }
}
export default App;