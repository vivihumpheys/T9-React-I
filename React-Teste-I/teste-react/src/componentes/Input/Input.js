import React from 'react';
import './Input.css';

function Input (props){
    return (
        <>
        <h1 className= 'tituloInput'>{props.titulo}</h1>
        <input className='caixaInput' type= {props.tipo}></input>
        </>
    )
    
};


export default Input;