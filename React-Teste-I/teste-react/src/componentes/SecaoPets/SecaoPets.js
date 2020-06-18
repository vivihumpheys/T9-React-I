import React from "react";
import gato from "../../componentes/imagens/GATO.jpg";
import cachorro from "../../componentes/imagens/cachorro.jpg";

class SecaoPets extends React.Component {
  constructor() {
    super();
    this.state = {
      imagem: "",
    };
  }

  render() {
    return (
      <div>
        <img alt="img de animal" src={this.state.imagem}></img>
        <div>
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
