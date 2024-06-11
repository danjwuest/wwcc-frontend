import { useState } from 'react';
// Looked up ClassNames here:
// https://www.npmjs.com/package/classnames
import classNames from 'classnames';
import garbageIcon from './assets/trashcan.svg';
// Looked up PropTypes here:
// https://www.npmjs.com/package/prop-types
import propTypes from 'prop-types';

export default function TaskItem(props){

    const [task, setTask] = useState(props.task)

    const handleChecked = (e) => {
        const {task, onChange} = props;

        if (e.target.checked) {
            onChange(task.id);
        }
    }

    const handleDelete = () => {
        const { task, onDelete } = props;

        onDelete(task.id);
    }


    var taskClasses = classNames('task', { 'task-complete': task.complete });

    return (
        <div className={taskClasses}>
            <input
                className="task-checkbox"
                type="checkbox"
                checked={task.complete}
                onChange={handleChecked}
            />
            
            <div className="task-description">{task.description}</div>

            <img
                className="task-remove-icon"
                src={garbageIcon}
                alt="Remove task"
                onClick={handleDelete}
            />
        </div>
    )
}

TaskItem.propTypes = {
    task: propTypes.shape({
        complete: propTypes.bool,
        description: propTypes.string
    }),
    onChange: propTypes.func,
    onDelete: propTypes.func

}
