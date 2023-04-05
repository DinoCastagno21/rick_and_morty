import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css"; 

export default function Detail(props) {
    // console.log(useParams);
    const { detailId } = useParams();

    
    const [character, setCharacter] = useState({}); 
    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)
        .then((response) => response.json())
        .then((char) => {
            if (char.name) {
                setCharacter(char);
            } else {
                window.alert("No hay personajes con ese ID");
            }
        })
        .catch((err) => {
            window.alert("No hay personajes con ese ID");
        });
        return setCharacter({});
    }, [detailId]);

    return (
        <div className={style.contain_detail}>
            <h1>{character?.name}</h1>
            <div className={style.datos_img}>
                <div className={style.contain_datos}>
                    <h2><b>Status:</b> {character?.status}</h2>
                    <h2><b>Species:</b> {character?.species}</h2>
                    <h2><b>Gender:</b> {character?.gender}</h2>
                    <h2><b>Origin:</b> {character.origin?.name}</h2>
                </div>
                    <img className={style.img} src={character.image} alt="photo_personaje"/>
            </div>
        </div>
        
    )

}