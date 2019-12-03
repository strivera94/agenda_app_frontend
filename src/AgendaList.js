import React, { Component } from 'react';
import Agenda from './Agenda'
import AgendaInput from './AgendaInput'

 class AgendaList extends Component {
    
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
        const agendas = this.state.agendas.map(agenda => (
           <Agenda agenda={agenda} key={agenda.id} />
        ))
    
        return (
            <div>
                <AgendaInput userInput={this.userInput} />
                {agendas}
            </div>
        );
    }
}

export default AgendaList;