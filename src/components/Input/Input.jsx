import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SET_QUERY, getMusicAsyncAction } from "../../redux/actions";
import { useState } from "react";

export const Input = () => {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(null);
  // const handleSearch = (event) => {
  //   if (event.key === "Enter") {
  //     dispatch({
  //       type: SET_QUERY,
  //       payload: event.target.value,
  //     });

  //   }
  // };
  const handleSearch = (event) => {
    clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        dispatch({
          type: SET_QUERY,
          payload: event.target.value,
        });
      }, 2000)
    );
  };
  // return <Form.Control type="text" onKeyUp={handleSearch} />;
  return <Form.Control type="text" onChange={handleSearch} />;
};
