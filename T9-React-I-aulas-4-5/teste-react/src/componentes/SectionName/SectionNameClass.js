import React from "react";

class SectionNameClass extends React.Component {
  //inicializa os valores da nossa classe
  constructor() {
    super();
    //o state serve para atualizar os valores do elemento assim que o novo evento for concluido, a variavel atualiza e o render é rodado novamente
    this.state = {
      valor: "",
    };
  }

  //função para guardar o valor do input
  pegarValorInput = (event) => {
    //criando uma vari[avel pro valor do input
    let input = event.target.value;

    //ao executar o SetState, o state é atualizado e o render é rodado novamente, o html chama o state de novo e ele é atualizado
    this.setState ({
        valor: input
    })
  }

  render (){
      return (
        <>
        <input onChange = {this.pegarValorInput }></input>
        <p>{this.state.valor}</p>
        </>
      )
  }
}

export default SectionNameClass