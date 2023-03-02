import React from "react";
import Card from "./Card";
import styled from "styled-components";

const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  @media (max-width: 720px) {
   flex-direction: column;
   align-items: center;
  }
`;

export default function Cards(props) {
  const { characters } = props;

  return (
    <ContainerCard>
      {characters.map((p) => (
        <Card
          name={p.name}
          species={p.species}
          gender={p.gender}
          image={p.image}
          onClose={() => alert("Emulamos que se cierra la card")}
          key={p.name}
        />
      ))}
    </ContainerCard>
  );
}
