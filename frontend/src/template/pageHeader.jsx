import React from 'react'

export default props => (
    <header className='Page-header'>
        <h2>{props.name} <small>{props.small}</small></h2>
    </header>
)