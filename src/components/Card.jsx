import React from "react"; 
import styled from "styled-components";

const DivCard = styled.div`
   width: 12em;
   height: 16.5em;
   background-color: rgba(0,0,0,0.4);
   margin: 0.6em;
   border: 2px solid rgb(217, 176, 255);
   border-radius: 10px;
   &:hover {
      box-shadow: 0 0 1em .25em rgb(217, 176, 255);
   }

   & img {
      margin: -1em 2px 0px 2px; 
      border-radius: 50%;
      height: 190px;
      width: 182px;
      object-fit: cover;
      box-shadow:0px 0px 4px black;
   }
`
const Button = styled.button`
   background-color: rgb(217, 176, 255);
   border-radius: 3px;
   position:relative;
   left: 5em;
   flex-wrap: wrap;
   width: 15px;
   height: 15px;
   align-content: center;
   border: none;
   box-shadow:0px 0px 2px 1px black;
   color: black;
   padding-bottom: 5px;
   justify-content:center;
   margin-top:2px;
   &:hover {
      border:none;
      box-shadow: 0 0 .2em .05em rgb(217, 176, 255);
   }
`
const Name = styled.h2`
   background-color:#DEDFDC;
   color: #21618C;
   font-size:1.5rem;
   display: flex;
   justify-content:center;
   transition: all 0.5s;
   
   &:hover {
      
   }
`
const Gender = styled.h2`
   color: ${props=> props.mOf === 'Male'? '#43A0EA ': '#EE4EE9 '};
   font-size: 1.3rem;
   display:inline-block;
   width:50%;
   padding-top:5px;
`
const Specie = styled.h2`
   font-size: 1.3rem;
   width:50%;
   display: inline-block;
   padding-top:5px;
   color:white;
`


export default function Card(props) {
   
   return (
      <DivCard>
         <Button onClick={props.onClose}>x</Button>
         <img  src={props.image} alt="personaje" />
         <Name>{props.name}</Name>
         <Specie>{props.species}</Specie>   
         <Gender mOf={props.gender}>{props.gender}</Gender>
      </DivCard>
   );
}
