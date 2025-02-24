import React from 'react';
import './filterButton.css';

const FilterButton = React.memo(({ filter, setFilter, completedTodos, uncompletedTodos }) => {
    console.log('FilterButton rendered')

    return (
        <div className="filters">
            <button
                className={filter === 'all' ? 'active' : ''}
                onClick={() => setFilter('all')}
            >
                All
            </button>
            <button
                className={filter === 'completed' ? 'active' : ''}
                onClick={() => setFilter('completed')}
                disabled={!completedTodos}
            >
                Completed
            </button>
            <button
                className={filter === 'uncompleted' ? 'active' : ''}
                onClick={() => setFilter('uncompleted')}
                disabled={!uncompletedTodos}
            >
                Uncompleted
            </button>
        </div>
    );
})

export default FilterButton;
