import React from 'react';

function Button (prop){
    return (
        <button onClick = {prop.clicar}>
            {prop.texto}
        </button>
    );
}

export default Button;