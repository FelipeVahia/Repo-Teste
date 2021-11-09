// Com o código do exercício1, você irá implementar mais algumas funcionalidades:
// a cada tentativa de atualização do componente, verifique se o campo message tem a string terrier. Se sim, não atualize o componente;
// guarde a url da última imagem gerada no localStorage após cada atualização.
// após a atualização do componente, exiba um alert com a raça do doguinho (verifique o campo message);

import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.data.message.includes("terrier")) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    localStorage.setItem("dogURL", this.state.data.message);
    const dogBreed = this.state.data.message.split("/")[4];
    alert(dogBreed);
  }

  fetchDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(result => this.setState({ data: result }));
  }

  render() {
    if (this.state.data === "") return "loading...";
    return (
      <div>
        <p>Doguinhos</p>
        <button onClick={ this.fetchDog }>Novo doguinho!</button>
        <div>
          <img src={ this.state.data.message } alt="Random dog" />
        </div>
      </div>
    );
  }
}

export default App;