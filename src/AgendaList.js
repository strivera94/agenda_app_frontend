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
        .then(data => 
            console.log(data)
            // this.setState({agendas: data})
            )
    }

    userInput = (event) => {
        event.preventDefault()
        fetch("http://localhost:3000/agendas" ,{
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({
                list: event.target.input.value
                // user_id: 1
            })
        })
        .then(r => r.json())
        .then(data => {
          this.setState({
          agendas: [...this.state.agendas, data]
          })
        })
    }

    render() {
        const agendas = this.state.agendas.map(agenda => (
           <Agenda agenda={agenda} key={agenda.id} />
        ))
    
        return (
            <div>
                <AgendaInput userInput={this.userInput} />
                <h3>My Agendas: </h3>
                {agendas}
            </div>
        );
    }
}

export default AgendaList;