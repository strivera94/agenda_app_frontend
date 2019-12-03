import React, { Component } from 'react';

export class AgendaInput extends Component {

    onChange = (event) => this.setState({[event.target.input]: event.target.value})

    render() {
        return (
            <div>
                <form onSubmit={this.props.userInput}>
                    <label>
                        My Agendas:
                        <br/>
                        <input
                            onChange={this.onChange}
                            style={{width: '50%', height: '20px'}}
                            type='text'
                            name='input'
                        />
                    </label>
                    <input type='submit' value='Submit' />
                </form>

            </div>
        );
    }
}

export default AgendaInput;