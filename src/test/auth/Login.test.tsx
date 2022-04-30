// @ts-nocheck
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App.tsx";
import Login from "../component/auth/Login.tsx";
import Enzyme, { shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("Login Page text exist on page", () => {
  const { getByText } = render(<Login />);
  const linkElement = getByText(/Don't have an account yet?/i);
  expect(linkElement).toBeInTheDocument();
});

// test login function when username and password are empty
test("Login with blank fields", () => {
  const wrapper = shallow(<Login />);
  wrapper
    .find("#username")
    .simulate("change", {
      target: { name: "username", value: "krishankantsinghal" },
    });
  wrapper.find("#loginBtn").simulate("click");
  expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
});
