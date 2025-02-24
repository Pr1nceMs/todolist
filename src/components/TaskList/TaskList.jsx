import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import './taskList.css'

const TaskList = ({ todos, toggleTask, onDelete }) => {
    console.log('TaskList rendered')
    return (
        <div className='task-list'>
            {todos.map(todo => (
                <TaskItem
                    key={todo.id}
                    todo={todo}
                    toggleTask={toggleTask}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}

export default TaskList