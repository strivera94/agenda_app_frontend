import React, { Component } from 'react';

export class AgendaInput extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.userInput}>
                    <label>
                        My Agendas:
                        <br/>
                        <input
                            style={{width: '50%', height: '20px'}}
                            type='text'
                            name='name'
                        />
                    </label>
                    <input type='submit' value='Submit' />
                </form>

            </div>
        );
    }
}

export default AgendaInput;
