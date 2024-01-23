import { ADD_FAV, REMOVE_FAV } from "../actions"

const initialState = {
    data: []
}
export const favReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAV: 
            return {
                ...state, 
                data: [...state.data, action.payload]
                // state.data = [a,b,c]
                // senza spread: [[a,b,c], d]
                // con spread: [a,b,c,d]
            }
        case REMOVE_FAV: 
            return {
                ...state, 
                data: state.data.filter(id => id!== action.payload)
            }
        default: return state
    }
}