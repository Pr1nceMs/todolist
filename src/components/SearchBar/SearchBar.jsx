import React from 'react'
import './searchBar.css'
import { FaSearch } from 'react-icons/fa';


const SearchBar = React.memo(({ todos, searchTerm, setSearchTerm }) => {
    console.log('SearchBar rendered')

    return (
        <div className='search-bar'>
            <FaSearch className="search-icon" />
            <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder='Rechercher'
                disabled={todos.length === 0 ? true : false}
            />
        </div>
    )
})

export default SearchBar