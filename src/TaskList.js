import React, { Component } from 'react';

export class TaskList extends Component {
   
    render() {
        return (
            <div>
                {this.props.task.heading}
            </div>
        );
    }
}

export default TaskList;
