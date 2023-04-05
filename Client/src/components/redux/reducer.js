import { ADD_FAV , DELETE_FAV, FILTER, ORDER } from "./actions_types"
const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, {type,payload}) => {
    switch(type){
        case ADD_FAV:
            return{
                ...state,
                allCharacters: [...state.allCharacters, payload],
                myFavorites: [...state.allCharacters, payload]
            }
        case DELETE_FAV:
            let filterFav = state.allCharacters.filter((card) => card.id !== payload)
            return{
                ...state,
                myFavorites: filterFav,
                allCharacters: filterFav
            }
        case FILTER:
            const filterGen = [...state.allCharacters.filter((card) => card.gender === payload)];
            return {
                ...state,
                myFavorites: filterGen
            }
        case ORDER:
            const orderCopy = [...state.allCharacters]
            const ordenado = orderCopy.sort((a,b)=>{
                if(a.id > b.id) {
                    return payload === "Ascendente" ? 1 : -1
                }
                if(a.id < b.id){
                    return payload === "Ascendente" ? -1 : 1
                }else {
                    return 0
                }
            })
            return {
                ...state,
                myFavorites: ordenado

            }

        default :
           return {...state}
    }
} 

export default rootReducer;