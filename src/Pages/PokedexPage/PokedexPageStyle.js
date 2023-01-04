import styled from "styled-components";

export const ContainerPokedex = styled.div`
  height: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 10px;
  justify-content: center;
  justify-items: center;
`;

export const BoxTitlePokedex = styled.div`
  width: 100%;
  padding: 35px;
  margin-top: 1%;
  grid-row: 1;
  grid-column: 1/4;
`;

export const TitlePokedex = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  color: #ffffff;
`;
