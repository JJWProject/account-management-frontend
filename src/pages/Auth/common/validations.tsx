import {
  NAME,
  USERNAME,
  EMAIL,
  PASSWORD,
  CONTACT_NUMBER,
  SUCCESS,
  UNSUCCESSFUL,
  UNSUCCESSFUL_EMAIL,
  UNSUCCESSFUL_USERNAME,
  INVALID_EMAIL,
  INVALID_USERNAME_EMAIL,
  VALID_USERNAME_EMAIL,
  BOOLEAN_TRUE,
  LOGOUT,
  BOOLEAN_FALSE,
} from "../../../constants/authConstants";

export const isInputEmail = (username: string) => {
  return username.includes("@");
};

export const validEmailCheck = (username: string) => {
  //eslint-disable-next-line
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username);
};

// at least 1 lower, 1 upper, 1 digit, 1 special character, min 8 characters
export const passwordComplexityCheck = (password: string) => {
  //eslint-disable-next-line
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/g.test(
    password
  );
};

export const validUsernameCheck = (username: string) => {
  return username.length > 3;
};

export const validNameCheck = (name: string) => {
  return name.length > 2;
};

// 8 digits only
export const validContactNumberCheck = (contactNumber: string) => {
  return /^\d{8}$/.test(contactNumber);
};

export const getAuthErrorMessage = (state: any, type: string) => {
  switch (type) {
    case NAME:
      return {
        ...state,
        message: "Please enter your name",
        remarks: "name",
      };
    case USERNAME:
      return {
        ...state,
        message: "Please enter your username",
        remarks: "username",
      };
    case EMAIL:
      return {
        ...state,
        message: "Please enter a valid email",
        remarks: "email",
      };
    case PASSWORD:
      return {
        ...state,
        message:
          "Password should contain at least 1 lowercase, 1 uppercase, 1 digit, 1 special character, and at least 8 characters long",
        remarks: "password",
      };
    case CONTACT_NUMBER:
      return {
        ...state,
        message: "Please enter a valid contact number",
        remarks: "contactNumber",
      };
    case UNSUCCESSFUL:
      return {
        ...state,
        message: "",
        remarks: "",
      };
    case UNSUCCESSFUL_USERNAME:
      return {
        isAuthenticated: BOOLEAN_FALSE,
        message: "Invalid username or password",
        remarks: "",
      };
    case UNSUCCESSFUL_EMAIL:
      return {
        ...state,
        message: "Invalid e-mail or password",
        remarks: "",
      };
    case INVALID_EMAIL:
      return {
        ...state,
        message: "You have entered an invalid E-Mail",
        remarks: "",
      };
    case INVALID_USERNAME_EMAIL:
      return {
        ...state,
        message: "Please enter a valid username or E-Mail",
        remarks: "",
      };
    case VALID_USERNAME_EMAIL:
      return {
        ...state,
        message: "Please check your email to reset your password",
        remarks: SUCCESS,
      };
    case SUCCESS:
      return {
        isAuthenticated: BOOLEAN_TRUE,
        message: "",
        remarks: "",
      };
    case LOGOUT:
      return {
        isAuthenticated: BOOLEAN_FALSE,
        message: "",
        remarks: "",
      };
    default:
      return {
        ...state,
        message: "",
        remarks: "",
      };
  }
};
