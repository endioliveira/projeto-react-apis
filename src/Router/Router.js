import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/pokedex" element={<PokedexPage/>}/>
            <Route path="/detailsPage/:id" element={<PokemonDetailPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router;