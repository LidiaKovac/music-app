import { GET_MUSIC, SET_QUERY } from "../actions";

const initialState = {
    searchResult: [],
    query: "metallica"
}
export const musicReducer = (state = initialState, action) => {
    // ritornare la nuova "versione" dello state, partendo da una copia
    /* 
        {
            type: "",
            payload: {}   
        }

    */
    switch(action.type) {
        case GET_MUSIC: 
        // dopo la fetch, salva i dati nello stato
            return {
                ...state, 
                searchResult: action.payload
            }
        case SET_QUERY: 
            return {
                ...state,
                query: action.payload
            }
        default: return state;
    }
}