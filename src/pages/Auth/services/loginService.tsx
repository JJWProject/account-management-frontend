import axios from "axios";

const DEFAULT_URL = "http://localhost:8080/";

const requestOptions = (list: any) => {
  return {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(list),
  };
};

export const loginByUsername = (username: string, password: string) => {
  try {
    fetch(DEFAULT_URL + "api/appuser/")
      .then((response) => response.json().then((data) => console.log(data)))
      .catch((error) => console.log(error));
  } catch (error) {
    console.log("error:", error);
  }
};

export const loginRequest = (username: string, password: string) => {

  let params = new URLSearchParams({
    username,
    password,
  })

  console.log("LOGIN")
  const res = axios.get(DEFAULT_URL + "api/login?" + params)
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

export const loginByEmail = (email: string, password: string) => {
  fetch(DEFAULT_URL + "todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export const checkIfEmailExists = (email: string, password: string) => {
  fetch(DEFAULT_URL + "todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export const getUsersByRole = (email: string, password: string) => {
  fetch(DEFAULT_URL + "todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export const getAllRoles = (email: string, password: string) => {
  fetch(DEFAULT_URL + "todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export const checkIfUsernameExists = (email: string, password: string) => {
  fetch(DEFAULT_URL + "todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export const checkIfContactNumberExists = (email: string, password: string) => {
  fetch(DEFAULT_URL + "todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export const getAllContactNumbers = (email: string, password: string) => {
  fetch(DEFAULT_URL + "todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export const getAllEmails = (email: string, password: string) => {
  fetch(DEFAULT_URL + "todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export const getAllUsers = (email: string, password: string) => {
  fetch(DEFAULT_URL + "todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export const getCurrentUser = (email: string, password: string) => {
  fetch(DEFAULT_URL + "todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
};
