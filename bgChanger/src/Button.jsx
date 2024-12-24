import { useState } from 'react'
import './App.css'

const Button = ({onClick, bgColor, color, name}) => {
    return(
    <button
        className="buttons"
        onClick={onClick}
        style={{backgroundColor: bgColor, color: color}}>{name}
    </button>
    )
}

export default Button