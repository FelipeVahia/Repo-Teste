// Com o código do exercício2, implemente:
// a cada foto que for baixada, através de um input, dê um nome ao doguinho ;
// crie um botão que guarde os resultados, juntamente com o nome dado ao 'doguinho', em um array;
// guarde o array no localStorage a cada atualização, e não mais a url da última imagem gerada;
// a cada inicialização da aplicação, verifique se existem dados prévios guardados no localStorage. Caso haja, ignore a instrução "assim que a página for renderizada, uma primeira requisição deve acontecer e a imagem deve ser mostrada na tela", e exiba a última imagem guardada.

import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      name: "",
      array: []
    };
    this.fetchDog = this.fetchDog.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  componentDidMount() {
    if (localStorage.namedDogURL) {
      const parseStorage = JSON.parse(localStorage.namedDogURL);
      const lastDog = parseStorage[parseStorage.length - 1].message;
      this.setState({
        array: parseStorage,
        data: { message: lastDog }
      });
    } else {
      this.fetchDog();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.data.message.includes("terrier")) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      const dogBreed = this.state.data.message.split("/")[4];
      alert(dogBreed);
    }
  }

  fetchDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(result => this.setState({ data: result }));
  }

  saveData() {
    const {
      data: { message },
      name,
      array
    } = this.state;
    const dogData = { message, name };
    const newArray = [...array, dogData];
    this.setState({ array: newArray });
    this.setState({ name: "" });
    localStorage.setItem("namedDogURL", JSON.stringify(newArray));
  }

  render() {
    if (this.state.data === "") return "loading...";
    return (
      <div>
        <p>Doguinhos</p>
        <button onClick={ this.fetchDog }>Novo doguinho!</button>
        <div>
          <input
            type="text"
            value={ this.state.name }
            onChange={ e => this.setState({ name: e.target.value }) }
            placeholder="digite o nome do doguinho"
          />
          <button onClick={this.saveData}>Salvar doguinho!</button>
        </div>
        <div>
          <img src={ this.state.data.message } alt={ this.state.data.message } />
        </div>
      </div>
    );
  }
}

export default App;