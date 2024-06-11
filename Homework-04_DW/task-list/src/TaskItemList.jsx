import TaskItem from './TaskItem'
import InputForm from './InputForm';
import emptyTasks from './assets/notebook.svg';
import { useState } from 'react';

export default function TaskItemList(props) {
    const [tasks, setTasks] = useState([])
    const [nextId, setNextId] = useState(1)
    var timers = [];



    const handleNewTask = (taskDescription) => {
        const newTask = {
            id: String(nextId),
            description: taskDescription,
            isComplete: false
        };
        setNextId(nextId + 1)
        setTasks([newTask, ...tasks])
    }

    const handleRemove = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId))

        timers = timers.filter((timerTracker) => timerTracker.taskId !== taskId);
    }

    // Not how I want to implement this, we'll hold onto this for a moment.

    function componentWillUnmount() {
        for (const timerTracker of timers) {
            clearTimeout(timerTracker.timerId);
        }
    }


    // Also not how I want to handle timed deletion, but we'll get back to that

    const handleComplete = (taskId) => {

        var tempTasks = tasks.map((task) => {
            if (task.id !== taskId) {
                console.log(task.id)
                return task;
            }
                
            return {
                ...task,
                isComplete: true
            };
        })

        setTasks(tempTasks)

        const timerId = setTimeout(() => handleRemove(taskId), 4000);
        timers.push({ timerId, taskId });
    }


    const isEmpty = tasks.length === 0;

    return (
        <>
            <InputForm onNewTask={handleNewTask} />

            <div className="task-list">
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onDelete={handleRemove}
                        onChange={handleComplete}
                    />
                ))}
            </div>

            {isEmpty && (
                <div className="empty-tasks-container">
                    <img className="empty-tasks-graphic" src={emptyTasks} alt="No tasks yet" />
                    <h4 className="empty-tasks-text">No tasks yet!</h4>
                </div>
            )}
        </>
    );

}