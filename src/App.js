import { React, useState, useEffect } from "react";
import axios from "axios";
import { GlobalContext } from "./contexts/GlobalContext";
import Router from "../src/Router/Router";
import { createGlobalStyle } from "styled-components";
import ModalPokemon from "./Components/ModalPokemon/ModalPokemon";


const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #5d5d5d;
  }`;

function App() {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState({});

  useEffect(() => {
    pokeList();
  }, []);

  const pokeList = async () => {
    await axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        setPokemonsList(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addPokemonToPokedex = (pokemon) => {
    const pokedexCopy = pokedex

    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemon.name
    );

    if (!isAlreadyOnPokedex) {
      pokedexCopy.push(pokemon)
      setPokedex(pokedexCopy);
    }
    // console.log(pokedex)
  };

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.id !== Number(pokemonToRemove)
    );

    console.log(newPokedex, "copy")
    setPokedex(newPokedex);
  };

  
  const context = {
    pokemonsList,
    setPokemonsList,
    pokeList,
    pokedex,
    setPokedex,
    addPokemonToPokedex,
    removeFromPokedex,
    pokemonDetails,
    setPokemonDetails

  };

  return (
    <>
      <GlobalContext.Provider value={context}>
        <ModalPokemon/>
        <Router />
        <GlobalStyled />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
