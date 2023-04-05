import React from "react";
import Cards from "../Cards/Cards.jsx";
import About from "../About/About.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Favorites from "../Favorites/Favorites.jsx";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";
// import styled from "styled-components";




// className={({isActive})=>(isActive)? style.active : style.disable}


export default function Nav(props){
    return (
     <nav className={style.barraNav}>
      <div className={style.container_link}>
        <NavLink to={"/home"} element={<Cards/>} className={({isActive})=>(isActive)? style.active : style.disable}>
        <span class="material-icons-outlined">home</span>
        </NavLink>
        <NavLink  to={"/about"} element={<About/>} className={({isActive})=>(isActive)? style.active : style.disable}>
              About
        </NavLink>
        <NavLink to={"/favorites"} element={<Favorites/>}className={({isActive})=>(isActive)? style.active : style.disable}>
              Favorites
        </NavLink>
      </div>
    <img className={style.img} src="../img/title.png" alt="title"/>
        <SearchBar
         onSearch={props.onSearch}
         randomCard={props.randomCard}
        />
     </nav>
    )
}