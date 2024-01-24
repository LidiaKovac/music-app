import { GET_MUSIC, SET_LOADING_FALSE, SET_LOADING_TRUE, SET_QUERY, SET_SELECTED_ALBUM, SET_SELECTED_ID } from "../actions";

const initialState = {
  searchResult: [],
  query: "metallica",
  selectedId: "",
  selectedAlbum: null,
  loading: true
};
export const musicReducer = (state = initialState, action) => {
  // ritornare la nuova "versione" dello state, partendo da una copia
  /* 
        {
            type: "",
            payload: {}   
        }

    */
  switch (action.type) {
    case SET_LOADING_TRUE: 
      return {
        ...state, 
        loading: true
      }
      
    case GET_MUSIC:
      // dopo la fetch, salva i dati nello stato
      return {
        ...state,
        searchResult: action.payload,
        loading: false
      };
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case SET_SELECTED_ID:
      return {
        ...state,
        selectedId: action.payload,
      };
    case SET_SELECTED_ALBUM: 
      return {
        ...state, 
        selectedAlbum: action.payload,
        loading: false
      }
    default:
      return state;
  }
};
