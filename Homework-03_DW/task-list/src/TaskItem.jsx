import { Component } from 'react';
// Looked up ClassNames here:
// https://www.npmjs.com/package/classnames
import classNames from 'classnames';
import garbageIcon from './assets/trashcan.svg';
// Looked up PropTypes here:
// https://www.npmjs.com/package/prop-types
import propTypes from 'prop-types';

class TaskItem extends Component {
    // List of props and their types.
    static propTypes = {
        task: propTypes.shape({
            complete: propTypes.bool,
            // Originally was going to name this "name" for name of the task, then realized there might be an issue with that,
            // if it collided with the html attributes.
            description: propTypes.string
        }),
        onChange: propTypes.func,
        onDelete: propTypes.func

    }
    // Do I need a constructor here?

    // Check handler that calls onComplete from the List object of TaskItem objects
    handleChecked = (e) => {
        const {task, onChange} = this.props;

        if (e.target.checked) {
            onChange(task.id);
        }
    }

    // Similar to handleCheck, but for removing with the trashcan button.
    handleDelete = () => {
        const { task, onDelete } = this.props;

        onDelete(task.id);
    }

    // When an object of this class is created, it will set its properties and return the html for displaying the object
    render() {
        const { task } = this.props;

        var taskClasses = classNames('task', { 'task-complete': task.complete });

        return (
            <div className={taskClasses}>
                <input
                    className="task-checkbox"
                    type="checkbox"
                    checked={task.complete}
                    onChange={this.handleChecked}
                />
                
                <div className="task-description">{task.description}</div>

                <img
                    className="task-remove-icon"
                    src={garbageIcon}
                    alt="Remove task"
                    onClick={this.handleDelete}
                />
            </div>
        )
    }

}

export { TaskItem };