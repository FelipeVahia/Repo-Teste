import React from "react";
import './App.css';
import Pokedex from "./Pokedex"

function App() {
  return (
    <main>
      <h1 className='title'> Pokedex </h1>
      <div className='pokedexDiv'>
        <section className='pokedex'>
          <Pokedex />
        </section>
      </div>
    </main>
  )
}

export default App;
