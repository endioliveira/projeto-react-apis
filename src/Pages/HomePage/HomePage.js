import React from "react";
import Header from "../../Components/Header/Header";
import PokemonListPage from "../PokemonListPage/PokemonListPage";
import { HomeContainer } from "./HomePageStyle";


function HomePage() {
  return (
    <HomeContainer>
    <Header />
    <PokemonListPage/>
    </HomeContainer>
  )
}

export default HomePage