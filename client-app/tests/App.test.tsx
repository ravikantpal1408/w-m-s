import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import { Provider } from "react-redux";
import { store } from "../src/store/store";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/MyApp/i);
  expect(linkElement).toBeInTheDocument();
});
