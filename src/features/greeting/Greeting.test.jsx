import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Greeting from "./Greeting.jsx";

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

it("render with login", () => {
  act(() => {
    render(<Greeting isLoggedIn={true} />, container);
  });
  expect(container.textContent).toBe("Hello, user 😎");
});

it("render with logout", () => {
  act(() => {
    render(<Greeting isLoggedIn={false} />, container);
  });
  expect(container.textContent).toBe("Hi stranger. Please login 🚀");
});
