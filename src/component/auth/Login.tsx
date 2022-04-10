// @ts-nocheck
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import * as constants from "../../constants/index.tsx";
import { Link } from "react-router-dom";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useReducer, useRef, useState } from "react";
import { Modal } from 'react-bootstrap';
import loginReducer from "../reducer/Login.tsx";
const Login = (props) => {
  const [modalState, setModalState] = useState(false);

  const usernameRef: any = useRef();
  const passwordRef: any = useRef();

  const initialState: any = { isValid: false, message: "" };
  const [loginState, loginDispatch] = useReducer(loginReducer, initialState);

  // closing pop up modal
  const onCloseModal = () => {
    setModalState(false);
  }

  // opening pop up modal
  const onOpenModal = () => {
    setModalState(true);
  }

  const loginHandler = () => {
    const userName = usernameRef.current.value;
    const password = passwordRef.current.value;
    loginDispatch({ type: constants.LOGIN, payload: { userName, password } });
  }

  if (loginState.isValid === true) {
    console.log("Login Successful!");
  }
  if (loginState.message !== "") {
    console.log(loginState.message);
  }

  return (
    <div className="login-container">
      <Card
        title="Login Page"
        className="login-card p-shadow-24"
        style={{ width: "25rem", marginBottom: "2em" }}
      >
        <br />
        <div className="p-fluid">
          <div className="p-field">
            <InputText id="username" type="username" placeholder="Username" ref={usernameRef} />
          </div>
          <div className="login-form-between-padding"></div>
          <div className="p-field">
            <InputText id="password" type="password" placeholder="Password" ref={passwordRef} />
            <br />
            <br />
          </div>
          <div onClick={() => onOpenModal()} class={{ cursor: "pointer" }}>Forget Password?</div>
          <br />
          <div className="p-field">
            {/* <Button label="Login" onClick={props.login} /> */}
            <Button label="Login" onClick={() => loginHandler()} />
          </div>
          <div className="p-field">
            <Link
              className="p-button"
              style={{
                display: "block",
                margin: "1rem 0",
                fontWeight: "Bold",
                textDecoration: "none",
              }}
              to={`/register`}
            >
              Register
            </Link>
          </div>

          <div style={loginState.isValid ? { color: "black" } : { color: "red" }}>{loginState.message}</div>
        </div>
      </Card>

      {/* pop up model */}
      <Modal show={modalState} onHide={() => onCloseModal()}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Forget Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => onCloseModal()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => onCloseModal()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
