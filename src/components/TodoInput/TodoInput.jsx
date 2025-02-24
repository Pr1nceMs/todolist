import React, { useCallback, useState, useRef } from 'react'
import './todoInput.css'

const TodoInput = React.memo(({ addTask }) => {
    console.log('TodoInput rendered')

    const inputRef = useRef('')

    const handleNewTask = (event) => {
        inputRef.current = event.target.value
    }

    const handleAddTask = () => {
        addTask(inputRef.current)
        inputRef.current = ''
        document.getElementById('taskInput').value = ''
    }

    return (
        <div className='input-group'>
            <input
                id='taskInput'
                type="text"
                placeholder='Ajouter une tâche'
                value={inputRef.current.value}
                onChange={handleNewTask}
            />
            {/* <button onClick={() => addTask(newTodo)}> */}
            <button onClick={handleAddTask}>
                Ajouter
            </button>
        </div>
    )
})

export default TodoInput