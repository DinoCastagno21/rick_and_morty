import React from "react";
import style from "./About.module.css";





export default function About() {
    return (
        
        <div className={style.container_about}>
            <h1 className={style.title}>Bienvenidos a mi primer SPA</h1>
            <div className={style.contain_img_p}>
                <img className={style.img_profile} src={"../img/henry_foto.jpg"} alt="photo_profile"/>
                <p className={style.text}>
                    Hola mi nombre es <b>Dino Castagno</b> y soy el creador de esta web.
                    Este mi primer proyecto desde cero, con la ayuda del excelente bootcamp de mis amigos de
                    <b>Henry</b> vamos a lograr un hermoso proyecto sobre la espectacular serie <b>Rick and Morty</b>(para aquel que no la haya visto la recomiendo totalmente). 
                    En esta web encontrarán a los 826 personajes que han aparecido en la serie, desde los más protagónicos, hasta los que han aparecido pocas veces. A cada uno lo encontraran en unas cartas con sos respectivos nombres, foto, especie y genero. 
                </p>
            </div>
         </div>

    );
}