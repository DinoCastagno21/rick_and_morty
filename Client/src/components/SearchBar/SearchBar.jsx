import React, { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar(props) {

  const [character,setCharacter] = useState("");
  const [input, setInput] = useState({
      value: ""
  });
  const handleChange = (event)=> {
  setCharacter( event.target.value )
  setInput({
    value: event.target.value
  })
  }
  


  return (
    <div className={style.contain_input}>
      <input className={style.input_search} type="search" placeholder="Id del personaje" onChange={handleChange} value={input.value} />
      <button className={style.button_search} onClick={()=> {
        props.onSearch(character)
        setInput({value: ""})
      }} 
      >Buscar</button>
      <button className={style.button_search} onClick={props.randomCard}>Aleatorio</button>
    </div>
  );
}
