import React from "react";
import "./Home.css";
import imagemGoogle from "../../imagens/googlelogo_color_272x92dp.png";
import Button from "../../componentes/Button/Button";
import Bemvinda from "../../componentes/Bemvinda/Bemvinda";
import imagemGiphy from '../../imagens/giphy.webp'

function Home() {
  return (
    <div className="img">
      <Bemvinda nome="Viviane" sobrenome="Miranda" />
      {/* <h1 className= 'titulo'>how you doin?</h1>
        <img  src= {imagemGoogle} alt='google'></img> */}
        <img className='giphy' src = {imagemGiphy} alt= 'giphy'></img>
         <div>
         <input className='input' type='text' placeholder='Escreva seu sobrenome'></input>
         </div>
      <div>
        <Button clicar={() => alert("Dinastia das BEEEE")} texto="Descubra sua dinastia" />
        <Button clicar={() => alert("País das Maravilhas")} texto="De qual país você é?" />
            {/* <button>Pesquisa</button>
            <button>EStou com sorte</button> */}
      </div>
    </div>
  );
}

export default Home;
