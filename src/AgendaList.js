import React, { Component } from 'react';
import Agenda from './Agenda'

 class AgendaList extends Component {
    
    render() {
        const agendas = this.props.agendaArr.map(agenda => (
           <Agenda agenda={agenda} key={agenda.id} />
        ))
    
        return (
            <div>
                {agendas}
            </div>
        );
    }
}

export default AgendaList;