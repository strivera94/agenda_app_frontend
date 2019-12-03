import React, { Component } from 'react';

export class Agenda extends Component {
    render() {
        return (
            <div>
                {this.props.agenda.list}
            </div>
        );
    }
}

export default Agenda;
