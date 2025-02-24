import React from 'react'
import './header.css';

const Header = React.memo(({ title }) => {
    console.log('Header rendered')
    return (
        <h1>{title}</h1>
    )
})

export default Header