import { React, useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { goToDetailsPage } from "../../Router/coordinator";
import { pokemonColors } from "../../utils/PokemonColors";
import { pokemonTypes } from "../../utils/PokemonTypes";
import {
  Pokebola,
  Card,
  Container,
  BoxButtons,
  PokemonTypeContainer,
} from "./PokemonCardStyle";
import logoPokemonCard from "../../assets/logo-pokemon-background.svg";

function PokemonCard(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const context = useContext(GlobalContext);

  const { addPokemonToPokedex, pokedex, removeFromPokedex } = context;

  const [pokemon, setPokemon] = useState({});
  const [types, setTypes] = useState([]);
  const [bgColor, setBgColor] = useState("");
  const [pokemonAlreadyOnPokedex, setPokemonAlreadyOnPokedex] = useState(false);
  const { url } = props;

  useEffect(() => {
    fetchPokemonCard();
  }, []);

  const showModal = () => {
    const modal = document.getElementById("modal");
    const title = document.getElementsByClassName("modalTitle");
    const description = document.getElementsByClassName("modalDescription");

    if (modal) {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";

      if (location.pathname === "/pokedex") {
        title[0].innerText = "Oh, no!";
        description[0].innerText = "O Pokémon foi removido da sua Pokedéx";
      } else {
        title[0].innerText = "Gotcha!";
        description[0].innerText = "O Pokémon foi adicionado a sua Pokédex";
      }
    }
  };

  const setPokemonToPokedex = (pokemon) => {
    pokemon.url = url;
    addPokemonToPokedex(pokemon);
    checkPokemonAlreadyOnPokedex(pokemon);
    showModal();
  };

  const removePokemon = (pokemon) => {
    removeFromPokedex(pokemon.id);
    console.log(pokedex, "card")
    showModal();
  };

  const checkPokemonAlreadyOnPokedex = (pokemon) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemon.name
    );
    if (isAlreadyOnPokedex) {
      setPokemonAlreadyOnPokedex(true);
    }
  };

  const fetchPokemonCard = async () => {
    console.log(url);
    await axios
      .get(url)
      .then((response) => {
        setPokemon(response.data);
        setBgColor(pokemonColors(response.data.types[0].type.name));
        setTypes(response.data.types);
        checkPokemonAlreadyOnPokedex(response.data);
      })
      .catch((error) => {
        console.log("Erro ao buscar lista de pokemons", error);
      });
  };

  return (
    <Card style={{ backgroundColor: bgColor }}>
      <Container>
        <p className="idPokemon">#0{pokemon.id}</p>
        <p className="name">{pokemon.name}</p>
        <PokemonTypeContainer>
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
        </PokemonTypeContainer>
      </Container>
      <img
        className="imgPokemon"
        src={pokemon.sprites?.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
      <BoxButtons>
        <Button
          fontSize={"18"}
          as={"u"}
          left={"10px"}
          fontWeight="bold"
          border={"hidden"}
          fontFamily={"Poppins"}
          cursor={"pointer"}
          onClick={() => goToDetailsPage(navigate, pokemon.id)}
        >
          Detalhes
        </Button>

        {location.pathname === "/pokedex" ? (
          <Button
            cursor={"pointer"}
            fontStyle={"400"}
            fontSize={"16"}
            lineHeight={"24"}
            color={"white"}
            w="146px"
            h="38px"
            right={"15px"}
            border={"hidden"}
            borderRadius={8}
            backgroundColor="#FF6262"
            fontFamily={"Poppins"}
            onClick={() => removePokemon(pokemon)}
          >
            Excluir
          </Button>
        ) : pokemonAlreadyOnPokedex ? (
          <Button
            fontStyle={"400"}
            fontSize={"16"}
            lineHeight={"24"}
            color={"#0F0F0F"}
            w="146px"
            h="38px"
            right={"15px"}
            border={"hidden"}
            borderRadius={8}
            colorScheme="white"
            fontFamily={"Poppins"}
          >
            Já capturado!
          </Button>
        ) : (
          <Button
            cursor={"pointer"}
            fontStyle={"400"}
            fontSize={"16"}
            lineHeight={"24"}
            color={"#0F0F0F"}
            w="146px"
            h="38px"
            right={"15px"}
            border={"hidden"}
            borderRadius={8}
            colorScheme="white"
            fontFamily={"Poppins"}
            onClick={() => setPokemonToPokedex(pokemon)}
          >
            Capturar!
          </Button>
        )}
      </BoxButtons>
      <Pokebola>
        <img
          className="logoPokemonCard"
          src={logoPokemonCard}
          alt="logo do Pokémon"
        />
      </Pokebola>
    </Card>
  );
}

export default PokemonCard;
