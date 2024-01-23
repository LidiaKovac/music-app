import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { GET_MUSIC, getMusicAction } from "./redux/actions";
import { Input } from "./components/Input/Input";
import { MusicList } from "./components/MusicList/MusicList";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
    <Container>
      <Input />
      <MusicList />
    </Container>
    </>
  );
}

export default App;
