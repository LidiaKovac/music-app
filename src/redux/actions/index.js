export const GET_MUSIC = "GET_MUSIC";
export const SET_QUERY = "SET_QUERY";
export const SET_SELECTED_ID = "SET_SELECTED_ID"
export const SET_SELECTED_ALBUM = "SET_SELECTED_ALBUM"

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

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
      const query = getState().music.query;
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
      );
      const { data: music } = await res.json();
      dispatch({
        type: GET_MUSIC,
        payload: music,
      });
      // dispatch(getMusicAction(music))
    } catch (error) {
      console.error(error);
    }
  };
};

export const getAlbumAsyncAction = () => {
  return async (dispatch, getState) => {
    try {
        console.log(getState())
        const albumId = getState().music.selectedId
        const res = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId); 
        const album = await res.json()
        dispatch({
          type: SET_SELECTED_ALBUM,
          payload: album
        })
    } catch (error) {
      console.error(error);
    }
  };
};
