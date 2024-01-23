import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_FAV, GET_MUSIC, REMOVE_FAV } from "../../redux/actions";
import { Button, Card, Col, Row } from "react-bootstrap";

export const MusicList = () => {
  const dispatch = useDispatch();
  const music = useSelector((state) => state.music.searchResult);
  const query = useSelector((state) => state.music.query);
  const favs = useSelector((state) => state.favs.data);
  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query)
      .then((raw) => {
        return raw.json();
      })
      .then((res) => {
        console.log(res.data);
        // setMusic(res.data);
        dispatch({
          type: GET_MUSIC,
          payload: res.data,
        });
      });
  }, [query]);
  const handleFavs = (id) => {
    if(favs.includes(id)) {
      dispatch({
        type: REMOVE_FAV,
        payload: id
      })
    } else {
      dispatch({
        type: ADD_FAV,
        payload: id,
      });
    }
  };
  return (
    <>
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
              </Card.Body>
            </Card>{" "}
          </Col>
        ))}
      </Row>
    </>
  );
};
