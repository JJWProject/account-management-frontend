import {
  isInputEmail,
  validEmailCheck,
  validUsernameCheck,
} from "../common/validations";

import { CustomError } from "../../../common/Exceptions";
import { BOOLEAN_FALSE, BOOLEAN_TRUE } from "../../../constants/authConstants";

export const forgetPassword = (username: string) => {
  if (isInputEmail(username)) {
    if (validEmailCheck(username)) {
      throw new CustomError(
        "You should receive an email with a link to reset your password if the e-mail you have entered is registered.",
        BOOLEAN_FALSE,
        ""
      );
    } else {
      throw new CustomError("Please enter a valid e-mail.", BOOLEAN_TRUE, "");
    }
  } else {
    if (validUsernameCheck(username)) {
      throw new CustomError(
        "You should receive an email with a link to reset your password if the username you have entered is registered.",
        BOOLEAN_FALSE,
        ""
      );
    } else {
      throw new CustomError("Please enter a valid username.", BOOLEAN_TRUE, "");
    }
  }
};
