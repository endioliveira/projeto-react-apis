import { React, useState, useEffect, useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToHomePage, goToPokedexPage } from "../../Router/coordinator";
import { Button } from "@chakra-ui/react";
import { ContainerHeader } from "./HeaderStyle";
import logoPokemon from "../../assets/pokemon-logo.svg";

function Header(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const context = useContext(GlobalContext);

  const [pokemonAlreadyOnPokedex, setPokemonAlreadyOnPokedex] = useState(false);

  const { addPokemonToPokedex, pokedex, removeFromPokedex, pokemonDetails} = context;

  useEffect(() => {
    checkPokemonAlreadyOnPokedex()
  }, []);

  const checkPokemonAlreadyOnPokedex = (pokemonDetails) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.id === Number(params.id)
    );
    if (isAlreadyOnPokedex) {
      setPokemonAlreadyOnPokedex(true);
    }
  };

  const showModal = (excluir) => {
    const modal = document.getElementById("modal");
    const title = document.getElementsByClassName("modalTitle");
    const description = document.getElementsByClassName("modalDescription");

    if (modal) {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";

      console.log(excluir)

      if (excluir) {
        title[0].innerText = "Oh, no!";
        description[0].innerText = "O Pokémon foi removido da sua Pokedéx";
      } else {
        title[0].innerText = "Gotcha!";
        description[0].innerText = "O Pokémon foi adicionado a sua Pokédex";
      }
    }
  };

  const setPokemonToPokedex = () => {
    const copyPokemon = pokemonDetails
    copyPokemon.url = `https://pokeapi.co/api/v2/pokemon/${params.id}/`;
    console.log(copyPokemon)
    addPokemonToPokedex(copyPokemon);
    checkPokemonAlreadyOnPokedex(copyPokemon);
    showModal();
  };

  const removePokemon = () => {
    removeFromPokedex(params.id);
    showModal(true);
    setPokemonAlreadyOnPokedex(false)
  };

  function render() {
    if (location.pathname === "/") {
      return (
        <>
          <img
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            src={logoPokemon}
            alt="Logo Do Pokémon"
          />
          <Button
            onClick={() => goToPokedexPage(navigate)}
            backgroundColor="#33A4F5"
            w="167px"
            h="45px"
            borderRadius={5}
            fontFamily={"Poppins"}
            border={"hidden"}
            cursor={"pointer"}
            color="#ffffff"
            fontWeight="bold"
            left={"87%"}
          >
            Pokédex
          </Button>
        </>
      );
    } else if (location.pathname === "/pokedex") {
      return (
        <>
          <Button
            left={"2%"}
            fontSize={"18"}
            as={"u"}
            fontWeight="bold"
            border={"hidden"}
            fontFamily={"Poppins"}
            backgroundColor="white"
            cursor={"pointer"}
            onClick={() => goToHomePage(navigate)}
          >
            {"< "}Todos os Pokémons
          </Button>
          <img
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            src={logoPokemon}
            alt="Logo Do Pokémon"
          />
        </>
      );
    } else if (location.pathname === `/detailsPage/${params.id}`) {
      return (
        <>
          <Button
            fontSize={"18"}
            as={"u"}
            fontWeight="bold"
            border={"hidden"}
            fontFamily={"Poppins"}
            backgroundColor="white"
            cursor={"pointer"}
            onClick={() => goToHomePage(navigate)}
          >
            {"< "}Todos os Pokémons
          </Button>

          <img src={logoPokemon} alt="Logo Do Pokémon" />

          {
            pokemonAlreadyOnPokedex ? (

              <Button
              onClick={() => removePokemon()}
              backgroundColor="#FF6262"
              w="167px"
              h="45px"
              borderRadius={5}
              fontFamily={"Poppins"}
              border={"hidden"}
              cursor={"pointer"}
              color="#ffffff"
              fontWeight="bold"
            >
              Excluir da Pokédex
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
              onClick={() => setPokemonToPokedex()}
            >
              Capturar!
            </Button>


            )
          }
        </>
      );
    }
  }

  return <ContainerHeader>{render()}</ContainerHeader>;
}

export default Header;
