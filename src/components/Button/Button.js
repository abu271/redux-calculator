import React from 'react'

const Button = ({ id, icon, func}) => (
    <button onClick={ func } value={ icon } id={ id }>
        { icon }
    </button>
)

export default Button