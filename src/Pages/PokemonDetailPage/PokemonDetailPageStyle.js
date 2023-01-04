import styled from "styled-components";

export const ContainerDetailPage = styled.div`
  height: 100%;
  background-color: #5d5d5d;
  margin-bottom: 180px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  .pokebolaContainer {
    overflow: hidden;
    width: 100%;
    height: 100%;
    /* left: 0;
    top: 0; */
    position: absolute;
  }
`;

export const TitleDetails = styled.h2`
  margin-right: 77%;
  /* padding: 35px; */

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  color: #ffffff;
`;

export const CardDetails = styled.div`
  width: 94%;
  padding: 1rem;
  color: white;
  font-family: Inter;
  border-radius: 10px;

  position: relative;
  display: flex;

  div {
    display: flex;
    flex-direction: column;
  }

  .idPokemon {
    width: 30px;
    height: 19px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;

    position: absolute;
    left: 690px;
    top: 24px;
  }

  .name {
    width: 238px;
    height: 58px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    color: #ffffff;
    text-transform: capitalize;
    margin-top: 5px;

    position: absolute;
    left: 690px;
    top: 39px;
  }

  .imgPokemon {
    width: 220px;
    height: 220px;

    position: absolute;
    left: 80%;
    top: -105px;
    z-index: 1;
  }
`;

export const BoxPokemon = styled.div`
  width: 215px;
  height: 215px;
  margin: 1rem;
  background: #ffffff;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 40%;
    height: 40%;
    /* width: 85%;
    height: 85%; */
  }
`;

export const ContainerBaseStats = styled.div`
  width: 340px;
  height: 462px;
  margin: 1rem;
  padding: 1.2rem;

  background: #ffffff;
  border-radius: 8px;

  hr {
    margin: 0.5rem;
    border-color: rgba(250, 250, 250);
    opacity: 0.2;
  }
`;

export const TitleBaseStats = styled.h2`
  margin-bottom: 0.5rem;
  color: #000000;
  font-family: "Inter";
  font-weight: 700;
`;

export const BaseStats = styled.div`
  color: black;
  font-weight: 300;
  text-align: center;

  flex-direction: row !important;
  align-items: center;
  justify-content: center;

  span {
    width: 50px;
    margin-left: 1rem;
    font-size: 0.8rem;
  }

  .stats {
    font-weight: bold;
    margin-left: 0.3rem;
  }

  .special {
    background-color: #ffde69;
  }

  .total {
    color: black;
    display: flex;
    flex-direction: row;
    margin-right: 11.8rem;
  }
`;

export const BarPokemon = styled.div`
  width: 190px;
  height: fit-content;
  margin-left: 0.3rem;
  background-color: white;

  display: flex;
`;

export const Progress = styled.div`
  width: ${(props) => props.width}%;
  height: 10px;

  border-radius: 2px;
  background-color: #ff7c2e;
`;

export const PokemonTypeContainer = styled.div`
  width: 99px;
  height: 31px;

  position: absolute;
  left: 690px;
  top: 107px;

  div {
    display: flex;
    flex-direction: row;
  }

  .imgTypePokemon {
    max-width: 100px;
    height: 32px;
    margin-right: 8px;
  }
`;

export const ContainerMoves = styled.div`
  width: 292px;
  background: #ffffff;
  border-radius: 8px;

  margin: 1rem;
  margin-top: 9rem;
  margin-left: 3.2rem;

  h2 {
    margin-left: 1.2rem;
    margin-top: 1rem;

    color: #000000;
    font-family: "Inter";
    font-weight: 700;
  }

  div {
    margin-top: 0.5rem;
    margin-left: 1rem;
  }
`;

export const TypeItemPokemon = styled.li`
  width: fit-content;
  height: 37px;
  padding: 10px;
  margin: 5px;
  border: 1px dashed rgba(0, 0, 0, 0.14);
  border-radius: 12px;
  background: #ececec;
  font-family: "Poppins", sans-serif;
  list-style: none;
  font-weight: 400;
  font-size: 14px;
  color: black;

  display: flex;
  align-items: center;
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

export const LogoPokemon = styled.img`
  width: 750px;
  height: 720px;

  position: absolute;
  top: -97px;
  right: -115px;
`;

export const LogoPokemonContainer = styled.img`
  width: 1080px;
  height: 950px;

  position: absolute;
  top: -190px;
  right: 10%;
`;
