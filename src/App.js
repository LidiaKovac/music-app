import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { GET_MUSIC, getMusicAction } from "./redux/actions";
import { Input } from "./components/Input/Input";
import { MusicList } from "./components/MusicList/MusicList";
import { Col, Container, Row } from "react-bootstrap";
import { AlbumDetails } from "./components/AlbumDetails/AlbumDetails";

function App() {
  return (
    <>
      <Container>
        <Input />
        <Row>
          <Col lg={8}>
            <MusicList />
          </Col>
          <Col lg={4}>
            <AlbumDetails />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
