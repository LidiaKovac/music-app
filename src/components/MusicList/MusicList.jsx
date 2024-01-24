import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_FAV,
  GET_MUSIC,
  REMOVE_FAV,
  SET_SELECTED_ID,
  getAlbumAsyncAction,
  getMusicAsyncAction,
} from "../../redux/actions";
import { Button, Card, Col, Row } from "react-bootstrap";
import Loading from "../Loading/Loading";

export const MusicList = () => {
  const dispatch = useDispatch();
  const music = useSelector((state) => state.music.searchResult);
  const query = useSelector((state) => state.music.query);
  const favs = useSelector((state) => state.favs.data);
  const error = useSelector(state => state.errors.status)
  const isLoading = useSelector(state => state.music.loading)
  useEffect(() => {
    dispatch(getMusicAsyncAction());
  }, [query]);

  const handleFavs = (id) => {
    if (favs.includes(id)) {
      dispatch({
        type: REMOVE_FAV,
        payload: id,
      });
    } else {
      dispatch({
        type: ADD_FAV,
        payload: id,
      });
    }
  };
  const handleSelect = (albumId) => {
    dispatch({
      type: SET_SELECTED_ID,
      payload: albumId,
    });
    dispatch(getAlbumAsyncAction());
  };
  return (
    <>
      {isLoading && !error ? <Loading /> : 
      <Row>
        {music.map((song) => (
          <Col lg={3}>
            {" "}
            <Card>
              <Card.Img src={song.album.cover_xl} />
              <Card.Body>
                <Card.Title>{song.title}</Card.Title>
                <Card.Text>{song.album.title}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleFavs(song.album.id)}
                >
                  {favs.includes(song.album.id)
                    ? "Rimuovi album dai prefe"
                    : "Aggiungi album ai prefe"}
                </Button>
                <Button
                  onClick={() => {
                    handleSelect(song.album.id);
                  }}
                >
                  Vedi dettagli
                </Button>
              </Card.Body>
            </Card>{" "}
          </Col>
        ))}
      </Row>}
    </>
  );
};
