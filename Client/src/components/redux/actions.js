import { ADD_FAV, DELETE_FAV , FILTER, ORDER } from "./actions_types"

export const addFav = (personaje) => {
    return {
        type: ADD_FAV,
        payload: personaje
    }
} 

export const deleteFav = (id) => {
    return {
        type: DELETE_FAV,
        payload: id
    }
}
export const filterCards = (genero) => {
    return {
        type: FILTER,
        payload: genero
    }

}

export const orderCards = (id) => {
    return {
        type: ORDER,
        payload: id
    }
}