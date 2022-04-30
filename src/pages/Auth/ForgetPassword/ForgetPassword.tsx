// @ts-nocheck
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useRef, useState } from "react";
import { forgetPassword } from "./ForgetPassword.actions";
import { useSelector } from "react-redux";

const ForgetPassword = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const usernameRef: any = useRef();

  const resetHandler = () => {
    const username = usernameRef.current.value;
    try {
      forgetPassword(username);
    } catch (err) {
      setIsError(err.type);
      setErrorMessage(err.message);
      if (err.type) {
        document.getElementById("username").style.backgroundColor = "#FBE9E9";
        document.getElementById("username").focus();
      }
    }
  };

  const redirectToMainPage = () => {
    resetInput();
    navigate("/");
  };

  const resetInput = () => {
    document.getElementById("username").style.backgroundColor = "white";
    setErrorMessage("");
  };

  if (isAuth) {
    redirectToMainPage();
  }
  return (
    <div className="login-container">
      <Card
        title="Forget Password Page"
        className="login-card p-shadow-24"
        style={{ width: "25rem", marginBottom: "2em" }}
      >
        <br />
        <div className="p-fluid">
          <div className="p-field">
            <InputText
              id="username"
              type="text"
              placeholder="Username or E-Mail"
              ref={usernameRef}
              onKeyDown={() => resetInput()}
            />
            <br />
            <br />
            <div style={isError ? { color: "red" } : { color: "black" }}>
              {errorMessage}
            </div>
          </div>
          <br />
          <div className="p-field">
            <Button label="Reset Password" onClick={() => resetHandler()} />
          </div>
          <br />
          <hr />
          <div className="p-field">
            <span
              onClick={() => redirectToMainPage()}
              style={{ cursor: "pointer" }}
            >
              Go back
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ForgetPassword;
