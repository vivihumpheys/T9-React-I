import React from 'react';
import './Button.css'

function Button (props){
    return (
        <>
        <button onClick = {props.funcao} className = {props.classe}>{props.texto}</button>
        </>
    )
};

export default Button;