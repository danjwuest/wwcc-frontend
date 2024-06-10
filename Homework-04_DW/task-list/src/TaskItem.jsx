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
    const onChecked = props.onChecked
    const onDelete= props.onDelete

    handleChecked = (e) => {
        const {task, onChecked} = props;

        if (e.target.checked) {
            onChecked(task.id);
        }
    }

    // Similar to handleCheck, but for removing with the trashcan button.
    handleDelete = () => {
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
                onChecked={this.handleChecked}
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

TaskItem.propTypes = {
    task: propTypes.shape({
        complete: propTypes.bool,
        // Originally was going to name this "name" for name of the task, then realized there might be an issue with that,
        // if it collided with the html attributes.
        description: propTypes.string
    }),
    onChecked: propTypes.func,
    onDelete: propTypes.func

}

// class TaskItem extends Component {
//     // List of props and their types.
//     static propTypes = {
//         task: propTypes.shape({
//             complete: propTypes.bool,
//             // Originally was going to name this "name" for name of the task, then realized there might be an issue with that,
//             // if it collided with the html attributes.
//             description: propTypes.string
//         }),
//         onChecked: propTypes.func,
//         onDelete: propTypes.func

//     }

//     // Check handler that calls onComplete from the List object of TaskItem objects
//     handleCheck = (e) => {
//         const {task, onChecked} = this.props;

//         if (e.target.checked) {
//             onChecked(task.id);
//         }
//     }

//     // Similar to handleCheck, but for removing with the trashcan button.
//     handleRemove = () => {
//         const { task, onRemove } = this.props;

//         onRemove(task.id);
//     }

//     // When an object of this class is created, it will set its properties and return the html for displaying the object
//     render() {
//         const { task } = this.props;

//         var taskClasses = classNames('task', { 'task-complete': task.complete });

//         return (
//             <div className={taskClasses}>
//                 <input
//                     className="task-checkbox"
//                     type="checkbox"
//                     checked={task.complete}
//                     onChange={this.handleChange}
//                 />
                
//                 <div className="task-description">{task.description}</div>

//                 <img
//                     className="task-remove-icon"
//                     src={garbageIcon}
//                     alt="Remove task"
//                     onClick={this.handleRemove}
//                 />
//             </div>
//         )
//     }

// }

// export { TaskItem };