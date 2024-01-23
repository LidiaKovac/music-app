export const GET_MUSIC = "GET_MUSIC"
export const SET_QUERY = "SET_QUERY"

export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"

// export const getMusicAction = (payload) => {
//     return {
//         type: GET_MUSIC,
//         payload
//     }
// }

export const getMusicAction = (payload) => ({ type: GET_MUSIC, payload})
