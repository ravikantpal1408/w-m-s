import React from "react";
import { render, screen } from "@testing-library/react";
import MapComponent from "../../src/components/MapComponent";

test("renders map mock", () => {
  render(<MapComponent />);
  expect(screen.getByText(/You are here!/i)).toBeInTheDocument();
  expect(screen.getByText(/New Delhi/i)).toBeInTheDocument();
});
