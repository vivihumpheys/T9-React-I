import React from "react";
import SecaoPets from "./componentes/SecaoPets/SecaoPets";
// import Input from "./componentes/Input/Input";
// import Titulo from './componentes/Titulo/Titulo'
// import Card from "./componentes/Card/Card";
// import ImagemAlaska from './componentes/imagens/alaska.gif';
// import ImagemFeijoada from './componentes/imagens/feijoada.jpg';
// import ImagemCaipi from './componentes/imagens/caipirinha.jpg';
// import SectionName from './componentes/SectionName/SectionName';
// import SectionNameClass from './componentes/SectionName/SectionNameClass';



function App() {
  return (
    // <div className="div">
    //   <Titulo user = 'vivi'/>
    //   <div className='div'>  
    //     <Input tipo="text" titulo='login'/>
    //     <Input tipo="password" titulo='senha' />
    //     <Input tipo="checkbox" titulo='ainda nao me cadastrei' />
    //   </div>
    // </div>
  //   <div>
  // <Card titulo='Essa é a sua drag favorita' subtitulo= 'Alaska' source = {ImagemAlaska}/>
  // <Card titulo='Essa é a sua comida favorita' subtitulo= 'Feijoada' source = {ImagemFeijoada}/>
  // <Card titulo='Essa é a sua bebida favorita' subtitulo= 'Caipirinha de siriguela' source = {ImagemCaipi}/>
  // </div>
  <>
  {/* <SectionName />
  <SectionNameClass /> */}

<SecaoPets />

</>

  );
}

export default App;
