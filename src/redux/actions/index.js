export const GET_MUSIC = "GET_MUSIC";
export const SET_QUERY = "SET_QUERY";
export const SET_SELECTED_ID = "SET_SELECTED_ID"
export const SET_SELECTED_ALBUM = "SET_SELECTED_ALBUM"

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

export const SET_LOADING_TRUE = "SET_LOADING_TRUE"
export const SET_LOADING_FALSE = "SET_LOADING_FALSE"

export const SET_ERROR = "SET_ERROR"
export const REMOVE_ERROR = "REMOVE_ERROR"
// export const getMusicAction = (payload) => {
//     return {
//         type: GET_MUSIC,
//         payload
//     }
// }

export const getMusicAction = (payload) => ({ type: GET_MUSIC, payload });
export const getMusicAsyncAction = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: SET_LOADING_TRUE
      })
      const query = getState().music.query;
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
      );
      if(!res.ok) {
          throw "Errore nella fetch"
      }
      const { data: music } = await res.json();
      dispatch({
        type: GET_MUSIC,
        payload: music,
      });
      dispatch({
        type: SET_LOADING_FALSE
      })
      // dispatch(getMusicAction(music))
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error
      })
      dispatch({
        type: SET_LOADING_FALSE
      })
    }
  };
};

export const getAlbumAsyncAction = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: SET_LOADING_TRUE
      })
        const albumId = getState().music.selectedId
        const res = await fetch("https://striveschool-api.herokuapp.com/pi/deezer/album/" + albumId); 
        if(!res.ok) {
          throw "Errore nella fetch album"
        }
        const album = await res.json()
        dispatch({
          type: SET_SELECTED_ALBUM,
          payload: album
        })
        dispatch({
          type: SET_LOADING_FALSE
        })
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error
      })
      dispatch({
        type: SET_LOADING_FALSE
      })
    }
  };
};
