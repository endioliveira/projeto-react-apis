import React from "react";
import { Container, Modal } from "./ModalPokemonStyle";

function ModalPokemon() {
  const closeModal = (event) => {
    if(event.currentTarget.id === event.target.id) {
      document.body.style.overflow = "initial";
      const modal = document.getElementById("modal")
      modal.style.display = "none";
    }
  }
  return (
    <>
      <Container id="modal" onClick={closeModal}>
        <Modal>
          <h2 className="modalTitle">
            Gotcha!
          </h2>
          <p className="modalDescription">
            O Pokémon foi adicionado a sua Pokédex
          </p>
        </Modal>
      </Container>
    </>
  );
}
export default ModalPokemon;
