import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SET_QUERY } from "../../redux/actions";

export const Input = () => {
  const dispatch = useDispatch();
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      //   console.log(event.target.value);
      dispatch({
        type: SET_QUERY,
        payload: event.target.value,
      });
    }
  };
  return <Form.Control type="text" onKeyUp={handleSearch} />;
};
