import React from "react";
import Header from "../../Components/Header/Header";
import { ContainerPokedex, BoxTitlePokedex, TitlePokedex } from "./PokedexPageStyle";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";

function PokedexPage() {
  const context = useContext(GlobalContext);
  const { pokedex } = context;

  return (
    <>
      <Header />
          <BoxTitlePokedex>
            <TitlePokedex>
              Meus Pokémons
            </TitlePokedex>
          </BoxTitlePokedex>
      <ContainerPokedex>
      {pokedex
      .map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.name}
            url={pokemon.url}
          />
        );
      })}
      </ContainerPokedex>
    </>
  );
}

export default PokedexPage;
