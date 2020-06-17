import React from 'react';
import './Bemvinda.css';

function Bemvinda (pessoa) {
    return <h1 className='titulo'>Bienvenida, <strong>{pessoa.nome}</strong>, da dinastia dos {pessoa.sobrenome}</h1>
};

export default Bemvinda;