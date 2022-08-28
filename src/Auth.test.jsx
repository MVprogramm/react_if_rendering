import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Auth from "./Auth.jsx";

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

it("render Auth component", () => {
  act(() => {
    render(<Auth />, container);
  });
  const button = document.querySelector(".btn");
  expect(button.innerHTML).toBe("Login");

  const greeting = document.querySelector("h1");
  expect(greeting.innerHTML).toBe("Hi stranger. Please login 🚀");
});

it("logged out on clicked", () => {
  act(() => {
    render(<Auth />, container);
  });

  const buttonBeforeClick = document.querySelector(".btn");
  act(() => {
    buttonBeforeClick.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  const greeting = document.querySelector("h1");
  expect(greeting.innerHTML).toBe("Hello, user 😎");

  const buttonAfterClick = document.querySelector(".btn");
  expect(buttonAfterClick.innerHTML).toBe("Logout");
});

it("logged in on clicked", () => {
  act(() => {
    render(<Auth />, container);
  });

  const buttonBeforeClick = document.querySelector(".btn");
  act(() => {
    buttonBeforeClick.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  const buttonAfterClick = document.querySelector(".btn");
  act(() => {
    buttonAfterClick.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  const greeting = document.querySelector("h1");
  expect(greeting.innerHTML).toBe("Hi stranger. Please login 🚀");

  const buttonAfterSecondClick = document.querySelector(".btn");
  expect(buttonAfterSecondClick.innerHTML).toBe("Login");
});
