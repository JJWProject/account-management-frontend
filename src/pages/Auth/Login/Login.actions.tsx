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
      loginRequest(username, password);
      return false;
    } else {
      throw new Error("Invalid email or password");
    }
  } else {
    if (validUsernameCheck(username) && passwordComplexityCheck(password)) {
      loginRequest(username, password);
      return false;
    } else {
      throw new Error("Invalid username or password");
    }
  }
};
