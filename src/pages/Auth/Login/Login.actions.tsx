import {
  isInputEmail,
  passwordComplexityCheck,
  validEmailCheck,
  validUsernameCheck,
} from "../common/validations";
import { loginRequest } from "../services/loginService";

const defaultResponse = {
  data: [],
  status: 403,
  statusText: '',
}

export const login = async (username: string, password: string) => {
  if (isInputEmail(username)) {
    if (validEmailCheck(username) && passwordComplexityCheck(password)) {
      const response: any = await loginRequest(username, password);
      response.statusText = 'Invalid email or password'
      return response
    } else {
      defaultResponse.statusText = "Invalid email or password";
      return defaultResponse
    }
  } else {
    if (validUsernameCheck(username) && passwordComplexityCheck(password)) {
      const response: any = await loginRequest(username, password);
      response.statusText = 'Invalid username or password'
      return response
    } else {
      defaultResponse.statusText = "Invalid username or password";
      return defaultResponse
    }
  }
};
