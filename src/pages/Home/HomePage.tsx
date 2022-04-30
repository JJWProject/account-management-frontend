import { useDispatch } from "react-redux";
import { authActions } from "../../store/slices/authenticationSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <div>
      HomePage
      <button onClick={() => logoutHandler()}>logout</button>
    </div>
  );
};

export default HomePage;
