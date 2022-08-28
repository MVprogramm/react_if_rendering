import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Logout from "./Logout.jsx";

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

it("render logout button", () => {
  act(() => {
    render(<Logout />, container);
  });

  const button = document.querySelector(".btn");
  expect(button.innerHTML).toBe("Logout");
});
