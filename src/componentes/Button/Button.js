import React from 'react';
import './Button.css'

function Button (prop){
    return (
        <button className='botao' onClick = {prop.clicar}>
            {prop.texto}
        </button>
    );
}

export default Button;