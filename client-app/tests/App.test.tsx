import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "../src/App";
import { store } from "../src/store/store";

test("renders app without crashing", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );

  // Check something that should always be there
  expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
});
