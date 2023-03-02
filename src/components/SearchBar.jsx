import React from "react";
import styled from "styled-components";

const ContainInput = styled.div`
  margin-top: 0.6em;
`;
const InputSearch = styled.input`
  color: #a44ff5;
  border: 2px solid rgb(217, 176, 255);
  border-radius: 10px;
  padding: 10px 10px;
  margin-right: 2em;
  background: transparent;
  max-width: 190px;
  box-shadow: 0 0 .2em .05em rgb(217, 176, 255);
  &:active {
    box-shadow: 2px 2px 15px #8707ff inset;
  }
  &::placeholder {
    color: #eee;
  }
  &:focus {
    outline: none;
  }
`;
const ButtonSearch = styled.button`
 border: .20em solid rgb(217, 176, 255);
 padding: 0.8em 2em;
 color: rgb(217, 176, 255);
 font-size: 15px;
 font-weight: bold;
 background-color: rgb(100, 61, 136);
 border-radius: 1em;
 outline: none;
 box-shadow: 0 0 .2em .05em rgb(217, 176, 255);

 position: relative;
 transition: all 0.3s;
 &::after {
   pointer-events: none;
 content: "";
 position: absolute;
 top: 120%;
 left: 0;
 height: 100%;
 width: 100%;
 background-color: rgba(191, 123, 255, 0.781);
 filter: blur(2em);
 opacity: .7;
 transform: perspective(1.5em) rotateX(35deg) scale(1, .6);
 }
 &:hover{
   color: var(--btn-color);
 background-color: rgb(217, 176, 255);
 box-shadow: 0 0 1em .25em rgb(217, 176, 255);,
      
        inset 0 0 .75em .25em rgb(217, 176, 255);;
 }
   
 &:active{
   box-shadow: 0 0 0.6em .25em rgb(217, 176, 255);,
        0 0 3em 1em rgba(191, 123, 255, 0.781),
        inset 0 0 .5em .25em rgb(217, 176, 255);;
 }
`;

export default function SearchBar(props) {
  return (
    <ContainInput>
      <InputSearch type="search" placeholder="Ingrese personaje" />
      <ButtonSearch onClick={props.onSearch}>Agregar</ButtonSearch>
    </ContainInput>
  );
}
