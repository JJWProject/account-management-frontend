import { useDispatch } from "react-redux";
import { CustomError } from "../../../common/Exceptions";
import {
  BOOLEAN_TRUE,
  CONTACT_NUMBER,
  EMAIL,
  NAME,
  PASSWORD,
  USERNAME,
} from "../../../constants/authConstants";
import { authActions } from "../../../store/slices/authenticationSlice";
import {
  passwordComplexityCheck,
  validContactNumberCheck,
  validEmailCheck,
  validNameCheck,
  validUsernameCheck,
} from "../common/validations";
import { registerRequest } from "../services/registerService";

let res: any;
export const register = (
  name: string,
  username: string,
  email: string,
  contactNumber: string,
  password: string
) => {
  if (
    validNameCheck(name) &&
    validUsernameCheck(username) &&
    validEmailCheck(email) &&
    validContactNumberCheck(contactNumber) &&
    passwordComplexityCheck(password)
  ) {
    try {
      res = registerRequest(name, username, password, email, contactNumber);
    } catch (err) {
      console.log("res", err)
    }
    return false;
  } else {
    if (!validNameCheck(name)) {
      throw new CustomError("Please enter your name", BOOLEAN_TRUE, NAME);
    }
    if (!validUsernameCheck(username)) {
      throw new CustomError(
        "Please enter your username",
        BOOLEAN_TRUE,
        USERNAME
      );
    }
    if (!validEmailCheck(email)) {
      console.log(email);
      throw new CustomError("Please enter a valid email", BOOLEAN_TRUE, EMAIL);
    }
    if (!validContactNumberCheck(contactNumber)) {
      throw new CustomError(
        "Please enter a valid contact number",
        BOOLEAN_TRUE,
        CONTACT_NUMBER
      );
    }
    if (!passwordComplexityCheck(password)) {
      throw new CustomError(
        "Password should contain at least 1 lowercase, 1 uppercase, 1 digit, 1 special character, and at least 8 characters long",
        BOOLEAN_TRUE,
        PASSWORD
      );
    }
  }
};
