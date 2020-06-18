import React from 'react';
import './Card.css';

function Card (props) {
    return (
        <div className = 'card'>
            <h2>{props.titulo}</h2>
            <h3>{props.subtitulo}</h3>
            <img className='img' src={props.source} alt='giphy'></img>
        </div>
    )
};

export default Card;