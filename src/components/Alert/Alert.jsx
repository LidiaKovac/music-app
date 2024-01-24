import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_ERROR } from "../../redux/actions";

export const CustomAlert = ({err, index}) => {
    const dispatch = useDispatch()
  return (
    <Alert
      variant="danger"
      onClose={() => dispatch({
        type: REMOVE_ERROR,
        payload: index
      })} dismissible
    >
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>{err}</p>
    </Alert>
  );
};
