import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgb(0 0 0 / 50%);
  display: none;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  min-width: 451px;
  height: 222px;
  padding: 60px;
  background-color: white;
  color: #000000;
  border-radius: 10px;

  text-align: center;
  font-family: "Poppins";
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    color: #000000 !important;
    margin-left: 0 !important;
    margin-top: 0 !important;
  }
`;
