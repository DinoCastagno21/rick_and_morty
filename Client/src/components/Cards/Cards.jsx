import React from "react";
import Card from "../Card/Card";
// import styled from "styled-components";
import style from "./Cards.module.css";


export default function Cards(props) {
  const { characters } = props;

  return (
    <div className={style.contain_cards}>
      {characters.map((p) => (
        <Card
          name={p.name}
          species={p.species}
          gender={p.gender}
          image={p.image}
          onClose={props.onClose}
          id={p.id}
          key={p.name}
        />
      ))}
    </div>
  );
}
