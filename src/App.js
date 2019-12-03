import React, { Component } from 'react';
import AgendaList from './AgendaList'
import Header from './Header'

 class App extends Component {

  state = {
    agendas: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/agendas")
    .then(r => r.json())
    .then(data => this.setState({agendas: data}))
  }

  userInput = (e) => {
    e.preventDefault()
    this.setState({
      agendas: [...this.state.agendas, {list: e.target.name.value}]
    })
  }

  render() {
    
    return (
      <div>
        <Header />
        <AgendaList agendaArr={this.state.agendas} />
      </div>
    );
  }
}

export default App;