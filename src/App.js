import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { GET_MUSIC, getMusicAction } from "./redux/actions";
import { Input } from "./components/Input/Input";
import { MusicList } from "./components/MusicList/MusicList";
import { Col, Container, Row } from "react-bootstrap";
import { AlbumDetails } from "./components/AlbumDetails/AlbumDetails";
import Loading from "./components/Loading/Loading";
import { Alert, CustomAlert } from "./components/Alert/Alert";

function App() {
  const error = useSelector((state) => state.errors.status);
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
      <div className="position-fixed bottom-0 end-0">
        {error && error.map((err, i) => <CustomAlert err={err} index={i} />)}
      </div>
    </>
  );
}

export default App;
