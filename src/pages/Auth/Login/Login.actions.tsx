import {
  isInputEmail,
  passwordComplexityCheck,
  validEmailCheck,
  validUsernameCheck,
} from "../common/validations";
import { loginRequest } from "../services/loginService";

export const login = (username: string, password: string) => {
  if (isInputEmail(username)) {
    if (validEmailCheck(username) && passwordComplexityCheck(password)) {
      console.log("here 1")
      loginRequest(username, password).then(res => {
        console.log(res)
      }).catch(err => {
        throw new Error(err.message);
      });
    } else {
      throw new Error("Invalid email or password");
    }
  } else {
    if (validUsernameCheck(username) && passwordComplexityCheck(password)) {
      console.log("here 2")
      loginRequest(username, password).then(res => {
        console.log(res)
      }).catch(err => {
        return (err.message);
      });
    } else {
      throw new Error("Invalid username or password");
    }
  }
};
