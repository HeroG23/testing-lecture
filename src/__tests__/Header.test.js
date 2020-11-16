import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Header from "../components/Header";

test("Does not show dropdown when mounted", () => {
  const { queryByTestId } = render(<Header />);

  const dropdown = queryByTestId("dropdown");

  expect(dropdown).toBeFalsy();
});

test("Shows dropdown when hamburger is clicked", () => {
  const { container, getByTestId } = render(<Header />);

  const hamburger = getByTestId("hamburger-button");

  fireEvent.click(hamburger);

  expect(container.textContent).toContain("Dropdown menu");
});
