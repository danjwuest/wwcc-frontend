import { TaskItem } from './TaskItem'
import InputForm from './InputForm';
import emptyTasks from './assets/notebook.svg';
import { useState } from 'react';

export default function TaskItemList(props) {
    const [tasks, setTasks] = useState([])
    var timers = [];
    var nextId = 1;



    const handleNewTask = (taskDescription) => {
        const newTask = {
            id: String(nextId++),
            description: taskDescription,
            isComplete: false
        };

        setTasks(newTask, ...tasks)
    }

    const handleRemove = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId))

        this.timers = this.timers.filter((timerTracker) => timerTracker.taskId !== taskId);
    }

    // Not how I want to implement this, we'll hold onto this for a moment.

    function componentWillUnmount() {
        for (const timerTracker of this.timers) {
            clearTimeout(timerTracker.timerId);
        }
    }


    // Also not how I want to handle timed deletion, but we'll get back to that
    
    const handleComplete = (taskId) => {

        var tempTasks = tasks.map((task) => {
            if (task.id !== taskId) return task;

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
                        onRemove={handleRemove}
                        onComplete={handleComplete}
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