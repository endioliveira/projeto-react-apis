import bug from "../assets/types-pokemon/bug.svg";
import dark from "../assets/types-pokemon/dark.svg";
import dragon from "../assets/types-pokemon/dragon.svg";
import electric from "../assets/types-pokemon/electric.svg";
import fairy from "../assets/types-pokemon/fairy.svg";
import fighting from "../assets/types-pokemon/fighting.svg";
import fire from "../assets/types-pokemon/fire.svg";
import flying from "../assets/types-pokemon/flying.svg";
import ghost from "../assets/types-pokemon/ghost.svg";
import grass from "../assets/types-pokemon/grass.svg";
import ground from "../assets/types-pokemon/ground.svg";
import ice from "../assets/types-pokemon/ice.svg";
import normal from "../assets/types-pokemon/normal.svg";
import poison from "../assets/types-pokemon/poison.svg";
import psychic from "../assets/types-pokemon/psychic.svg";
import rock from "../assets/types-pokemon/rock.svg";
import steel from "../assets/types-pokemon/steel.svg";
import water from "../assets/types-pokemon/water.svg";

  export const pokemonTypes = (type) => {
    switch(type) {
      case "bug":
        return bug;
      case "dark":
        return dark;
      case "dragon":
        return dragon;
      case "electric":
        return electric;
      case "fairy":
        return fairy;
      case "fighting":
        return fighting;
      case "fire":
        return fire;
      case "flying":
        return flying;
      case "ghost":
        return ghost;
      case "grass":
        return grass;
      case "ground":
        return ground;
      case "ice":
        return ice;
      case "normal":
        return normal;
      case "poison":
        return poison;
      case "psychic":
        return psychic;
      case "rock":
        return rock;
      case "steel":
        return steel;
      case "water":
        return water;
      default:
        return water;
    }
  };

