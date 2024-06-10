import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function InputForm(props){
    const [taskDescription, setDescription] = useState('')


    const inputRef = React.createRef();

    const handleChange = (e) => {
        setDescription(e.target.value);
    }

    const handleCreate = (e) => {
        e.preventDefault();

        props.onNewTask(taskDescription);

        setDescription('');

        inputRef.current?.focus();
    }

    const canSubmit = taskDescription.trim().length === 0;
        return (
            <form onSubmit={handleCreate}>
                <div className="task-input-container">
                    <input
                        className="task-input"
                        type="text"
                        ref={inputRef}
                        value={taskDescription}
                        onChange={handleChange}
                    />

                    <button
                        className="task-create-btn"
                        type="submit"
                        disabled={canSubmit}
                        onClick={handleCreate}
                    >
                        Create
                    </button>
                </div>
            </form>
        );
}