import axios from "axios";

const DEFAULT_URL = "http://localhost:8080/";

const requestOptions = (list: any) => {
  return {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(list),
  };
};

export const registerRequest = async (
  name: string,
  username: string,
  password: string,
  email: string,
  contactNumber: string
) => {
  const userObj = {
    id: null,
    name: name,
    username: username,
    password: password,
    email: email,
    contactNumber: contactNumber
  };


  const res = axios.post(DEFAULT_URL + "api/appuser/common", userObj)
    .then(response => {
      return {
        data: response.data,
        status: response.status,
        statusText: '',
      }
    }).catch((error) => {
      return {
        data: [],
        status: error.request.status,
        statusText: '',
      }
    });

  return res;
};
