import { React, useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import axios from "axios";
import Header from "../../Components/Header/Header";
import { pokemonColors } from "../../utils/PokemonColors";
import { pokemonTypes } from "../../utils/PokemonTypes";
import { useParams } from "react-router-dom";
import {
  CardDetails,
  ContainerDetailPage,
  TitleDetails,
  Pokebola,
  LogoPokemon,
  BoxPokemon,
  ContainerBaseStats,
  TitleBaseStats,
  BaseStats,
  BarPokemon,
  Progress,
  PokemonTypeContainer,
  ContainerMoves,
  TypeItemPokemon,
  LogoPokemonContainer,
  // PokebolaContainer
} from "./PokemonDetailPageStyle";
import logoPokemonCard from "../../assets/logo-pokemon-background.svg";

function PokemonDetailPage() {
  const [pokemon, setPokemon] = useState({});
  const [bgColor, setBgColor] = useState("");
  const [types, setTypes] = useState([]);
  const [totalStats, setTotalStats] = useState(0);

  const context = useContext(GlobalContext);
  const params = useParams();

  const { setPokemonDetails } = context;

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  const fetchPokemonDetails = async () => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.id}/`)
      .then((response) => {
        const pokemon = response.data;
        setPokemon(pokemon);
        setBgColor(pokemonColors(pokemon.types[0].type.name));
        setTypes(pokemon.types);
        setPokemonDetails(pokemon);
        const total = pokemon.stats.reduce((contador, stats) => {
          return (contador += stats.base_stat);
        }, 0);
        setTotalStats(total);
      })
      .catch((error) => {
        console.log("Erro ao buscar lista de pokemons", error);
      });
  };

  return (
    <>
      <Header />
      <ContainerDetailPage>
            <div className="pokebolaContainer">
              <LogoPokemonContainer src={logoPokemonCard} alt="logo do Pokémon" />
            </div>
        <TitleDetails>Detalhes</TitleDetails>
        <CardDetails
          style={{
            backgroundColor: bgColor,
          }}
        >
          <div>
            <BoxPokemon>
              <img src={pokemon.sprites?.versions["generation-v"]["black-white"].animated.front_default} alt="" />
            </BoxPokemon>
            <BoxPokemon>
              <img src={pokemon.sprites?.versions["generation-v"]["black-white"].animated.back_default} alt="" />
            </BoxPokemon>
          </div>

          <ContainerBaseStats>
            <TitleBaseStats>Base stats</TitleBaseStats>
            <div>
              <hr />
              <BaseStats>
                <span>HP</span>
                <span className="stats">
                  {pokemon.stats && pokemon?.stats[0]?.base_stat}
                </span>
                <BarPokemon>
                  <Progress
                    width={pokemon.stats && pokemon?.stats[0]?.base_stat}
                  />
                </BarPokemon>
              </BaseStats>
              <hr />
              <BaseStats>
                <span>Attack</span>
                <span className="stats">
                  {pokemon.stats && pokemon?.stats[1]?.base_stat}
                </span>
                <BarPokemon>
                  <Progress
                    width={pokemon.stats && pokemon?.stats[1]?.base_stat}
                  />
                </BarPokemon>
              </BaseStats>
              <hr />
              <BaseStats>
                <span>Defense</span>
                <span className="stats">
                  {pokemon.stats && pokemon?.stats[2]?.base_stat}
                </span>
                <BarPokemon>
                  <Progress
                    width={pokemon.stats && pokemon?.stats[2]?.base_stat}
                  />
                </BarPokemon>
              </BaseStats>
              <hr />
              <BaseStats>
                <span>Sp. Atk</span>
                <span className="stats">
                  {pokemon.stats && pokemon?.stats[3]?.base_stat}
                </span>
                <BarPokemon>
                  <Progress
                    className="special"
                    width={pokemon.stats && pokemon?.stats[3]?.base_stat}
                  />
                </BarPokemon>
              </BaseStats>
              <hr />
              <BaseStats>
                <span>Sp. Def</span>
                <span className="stats">
                  {pokemon.stats && pokemon?.stats[4]?.base_stat}
                </span>
                <BarPokemon>
                  <Progress
                    className="special"
                    width={pokemon.stats && pokemon?.stats[4]?.base_stat}
                  />
                </BarPokemon>
              </BaseStats>
              <hr />
              <BaseStats>
                <span>Speed</span>
                <span className="stats">
                  {pokemon.stats && pokemon?.stats[5]?.base_stat}
                </span>
                <BarPokemon>
                  <Progress
                    width={pokemon.stats && pokemon?.stats[5]?.base_stat}
                  />
                </BarPokemon>
              </BaseStats>
              <hr />
              <BaseStats>
                  <div className="total">
                    <span>Total</span>
                    <span className="stats">{totalStats}</span>
                  </div>
              </BaseStats>
              <hr />
            </div>
          </ContainerBaseStats>
          <div>
            <p className="idPokemon">#0{pokemon.id}</p>
            <p className="name">{pokemon.name}</p>

            <PokemonTypeContainer>
              <div>
                {types.map((type) => {
                  return (
                    <img
                      className="imgTypePokemon"
                      key={type.type.name}
                      src={pokemonTypes(type.type.name)}
                      alt={type.type.name}
                    />
                  );
                })}
              </div>
            </PokemonTypeContainer>
          </div>

          <ContainerMoves>
            <h2>Moves:</h2>
            <div>
              {pokemon.moves &&
                pokemon.moves.splice(5) &&
                pokemon.moves.map((item) => {
                  return (
                    <TypeItemPokemon key={item.move.name}>
                      {item.move.name}
                    </TypeItemPokemon>
                  );
                })}
            </div>
          </ContainerMoves>

          <img
            className="imgPokemon"
            src={pokemon.sprites?.other["official-artwork"].front_default}
            alt={pokemon.name}
          />

          <Pokebola>
            <LogoPokemon src={logoPokemonCard} alt="logo do Pokémon" />
          </Pokebola>
        </CardDetails>
      </ContainerDetailPage>
    </>
  );
}

export default PokemonDetailPage;
