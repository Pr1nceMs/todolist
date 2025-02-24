import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Header from './components/Header/Header'
import TodoInput from './components/TodoInput/TodoInput'
import SearchBar from './components/SearchBar/SearchBar'
import TaskList from './components/TaskList/TaskList'
import FilterButton from './components/FiltersButton/FilterButton'
// import taskReducer from './taskReducer'

const Todolist = () => {

    const style = { display: 'flex', alignItems: 'center', justifyContent: 'center' }
    const spanStyle = { color: '#fff', fontWeight: 500 }

    const [todos, setTodos] = useState([
        { id: 1, text: 'Acheter du lait', completed: false },
        { id: 2, text: 'Faire a manger', completed: false },
        { id: 3, text: 'Se reposer', completed: false }


    ]);
    const [searchTerm, setSearchTerm] = useState("");
    const [nextId, setNextId] = useState(1);
    const [filter, setFilter] = useState("all");

    const addTask = useCallback(
        (textTodo) => {
            if (todos.some((todo) => todo.text === textTodo)) {
                return alert("Tache deja existante");
            }
            if (textTodo.trim() === '') {
                return alert("Impossible d'ajouter une tache")
            }
            if (textTodo.trim()) {
                setTodos((prevTodos) => [
                    ...prevTodos,
                    { id: nextId, text: textTodo, completed: false },
                ]);
                setNextId((previousId) => previousId + 1);
            }
        },
        [nextId]
    );

    const toggleTask = useCallback(
        (id) => {
            setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.id === id ? { ...todo, completed: !todo.completed } : todo
                )
            );
        },
        [todos]
    );

    const deleteTask = useCallback(
        (id) => {
            setTodos((prevTodos) =>
                prevTodos
                    .filter((todo) => todo.id !== id)
                    .map((todo, index) => ({ ...todo, id: index + 1 }))
            );
            // console.error();
        },
        [todos]
    );


    useEffect(() => {
        console.log(todos.length)
        console.log(todos.map(todo => todo.text))

    }, [todos])

    console.log('Todolist.jsx rendered');

    const filteredTodos = useMemo(() => {
        return todos.filter(todo => {
            console.log("filteredTodos returned");
            const matchSearches = todo.text.toLowerCase().includes(searchTerm.toLowerCase())
            if (filter === 'completed') return todo.completed && matchSearches
            if (filter === 'uncompleted') return !todo.completed && matchSearches
            return matchSearches
        })
    }, [todos, searchTerm, filter])

    const hasCompletedTodos = useMemo(() => todos.some(todo => todo.completed), [todos]);
    const hasUncompletedTodos = useMemo(() => todos.some(todo => !todo.completed), [todos]);


    return (
        <div style={{ padding: '5px 30px' }}>
            <Header title="Ma todo liste" />
            <TodoInput addTask={addTask} />
            <SearchBar todos={filteredTodos} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            {todos.length === 0 ?
                (
                    <div style={style}>
                        <span style={spanStyle}>Aucune tache pour le moment</span>
                    </div>
                )
                :
                <TaskList todos={filteredTodos} toggleTask={toggleTask} onDelete={deleteTask} />
            }
            <FilterButton filter={filter} setFilter={setFilter} completedTodos={hasCompletedTodos} uncompletedTodos={hasUncompletedTodos} />
        </div>
    )
}

export default Todolist