import { connect } from "react-redux";
import React from "react";
import  Card  from "../Card/Card";
import styled from "./Favorites.module.css";
import { orderCards, filterCards } from "../redux/actions";
import { useDispatch } from "react-redux";

export function Favorites({myFavorites}) {
 
    const dispatch = useDispatch()
    const handleDispatch = (event) => {
        const {name , value} = event.target;
        if(name === "order"){
            return  dispatch(orderCards(value))
        }
        if(name === "filter"){
            return dispatch(filterCards(value))
        }
    }


    return (
        <div className={styled.container_fav}>
            {myFavorites && myFavorites?.map(({name , id , gender , species , image})=> (
                <Card
                    name={name}
                    species={species}
                    gender={gender}
                    image={image}
                    id={id}
                    key={id}
                /> 

            ))}
            <div>
                <select name="order" onClick={handleDispatch}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendete">Descendete</option>
                </select>
                <select name="filter" onClick={handleDispatch}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderles">Genderles</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites)