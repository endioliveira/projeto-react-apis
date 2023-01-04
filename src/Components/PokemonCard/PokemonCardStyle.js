import styled from "styled-components";

export const Card = styled.div`
  width: 410px;
  height: 190px;
  margin-bottom: 3rem;
  border-radius: 10px;
  color: white;
  font-family: Inter;

  position: relative;
  display: flex;

  .imgPokemon {
    width: 160px;
    height: 185px;

    position: absolute;
    top: -57px;
    left: 235px;
    z-index: 1;
  }

  .logoPokemonCard {
    width: 300px;
    height: 260px;

    position: absolute;
    top: -62px;
    right: -54px;
  }
`;

export const Container = styled.div`
  padding: 20px;

  .idPokemon {
    width: 30px;
    height: 19px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
  }

  .name {
    width: 159px;
    height: 39px;
    font-family: "Inter";
    font-weight: 700;
    font-size: 25px;
    color: #ffffff;
    text-transform: capitalize;
  }
`;

export const PokemonTypeContainer = styled.div`
  .imgTypePokemon {
    max-width: 100px;
    height: 32px;
    margin-right: 8px;
  }
`;

export const BoxButtons = styled.div`
  width: 395px;
  height: 38px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  z-index: 3;
  position: absolute;
  left: 10px;
  top: 140px;
`;

export const Pokebola = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;

  position: absolute;
  left: 0;
  top: 0;
`;
