import React from 'react'
import './taskItem.css'
import { FaCheckCircle, FaTimesCircle, FaTrash } from 'react-icons/fa';


const TaskItem = ({ todo, toggleTask, onDelete }) => {
    console.log('TaskItem rendered')

    return (
        <div className={`task-item ${todo.completed ? 'completed' : ''}`}>
            <div className="task-content">
                <button
                    className="toggle-btn"
                    onClick={() => toggleTask(todo.id)}
                >
                    {
                        !todo.completed ?
                            <FaCheckCircle className="icon check" /> :
                            <FaTimesCircle className="icon times" />
                    }
                </button>
                <span className="task-text">{todo.id} : {todo.text}</span>
            </div>
            <button
                className="delete-btn"
                onClick={() => onDelete(todo.id)}
            >
                <FaTrash className="icon trash" />
            </button>
        </div>
    )
}

export default TaskItem