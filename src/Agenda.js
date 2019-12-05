import React, { Component } from 'react';
import TaskList from './TaskList'

export class Agenda extends Component {
    render() {

        // const renderTasks = this.props.agenda.tasks.map(tasks => (
        //     <TaskList tasks={tasks} />
        // )) 

        return (
            <div>
                <h4>{this.props.agenda.list}</h4>
                {/* {renderTasks} */}
            </div>
        );
    }
}

export default Agenda;