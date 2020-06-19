import React, { Component } from "react";
import "./Contador.css";
import Button from "../Button/Button";

class Contador extends Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
    };
  }

  aumentarContador = () => {
    //antes de tudo, faça teste com o console para ver se o botão está de fato chamando essa função
    console.log("aumentar");
    this.setState((estadoInicial) => ({
      // como boas praticas, recomenda-se colocar um parametro auxiliador para chamar o this.state, ao invés de chamar direto
      contador: estadoInicial.contador + 1,
      //forma mais simples, porém nao é boa prática
      // contador: this.state.contador +1
    }));
  };

  diminuirContator = () => {
    console.log("diminuir");
    this.setState((estadoInicial) => ({
      contador: estadoInicial.contador - 1,
    }));
  };

  render() {
    return (
      <div className="div-botao">
        {/* puxando um componente dentro do outro, botão criado como componente externo */}
        <Button classe="botao" texto="-" funcao={this.diminuirContator} />
        {/* <button onClick = {this.diminuirContator} className="botao">-</button> */}
        <h3> {this.state.contador} </h3>
        <Button classe="botao" texto="+" funcao={this.aumentarContador} />
        {/* <button onClick = {this.aumentarContador} className="botao">+</button> */}
      </div>
    );
  }
}

export default Contador;
