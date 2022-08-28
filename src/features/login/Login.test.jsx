import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Login from "./Login.jsx";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("render login button", () => {
  act(() => {
    render(<Login />, container);
  });

  const button = document.querySelector(".btn");
  expect(button.innerHTML).toBe("Login");
});
