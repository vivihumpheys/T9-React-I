import React from "react";
import "./SecaoPets.css";
import gato from "../../imagens/GATO.jpg";
import cachorro from "../../imagens/cachorro.jpg";
import Button from "../Button/Button";

class SecaoPets extends React.Component {
  constructor() {
    super();
    this.state = {
      imagem: "",
    };
  }

  aparecerGato = () => {
    this.setState({
      imagem: gato,
    });
  };

  aparecerCachorro = () => {
    this.setState({
      imagem: cachorro,
    });
  };

  render() {
    return (
      <div className="container">
        <img alt="img de animal" className="img" src={this.state.imagem}></img>

        <div className="container-botao">
          {/* Button feito com componente importado */}
          <Button classe="botao" funcao={this.aparecerGato} texto="Gatinho" />
          <Button
            classe="botao"
            funcao={this.aparecerCachorro}
            texto="Catiorito"
          />

          {/* Button feito com html dentro da função de componente */}
          <button
            onClick={() => {
              this.setState({ imagem: gato });
            }}
          >
            Gato{" "}
          </button>
          <button
            onClick={() => {
              this.setState({ imagem: cachorro });
            }}
          >
            Catioro
          </button>
        </div>
      </div>
    );
  }
}

export default SecaoPets;
