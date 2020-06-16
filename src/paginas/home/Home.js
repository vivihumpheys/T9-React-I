import React from 'react';
import './Home.css';
import imagemGoogle from '../../imagens/googlelogo_color_272x92dp.png';
import Button from '../../componentes/Button/Button'
import Bemvinda from '../../componentes/Bemvinda/Bemvinda';

function Home (){
    return (
    <div className='img'>
        <Bemvinda nome='Viviane' sobrenome= "Miranda"/>
         {/* <h1 className= 'titulo'>how you doin?</h1>
        <img  src= {imagemGoogle} alt='google'></img> */}
        <div>
            <Button clicar= {() => alert ('oiiie')} texto = 'clique aqui'/>
             {/* <input type='text'></input>
            <button>Pesquisa</button>
            <button>EStou com sorte</button> } */}
         </div>  
    </div>
    );
};

export default Home;