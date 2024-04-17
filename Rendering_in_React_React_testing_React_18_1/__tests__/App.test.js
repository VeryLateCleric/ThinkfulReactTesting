import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from "../src/App";
import Greeting from "../src/Greeting";

describe("Test App.js", () => {
  test("renders without crashing", () => {
    // Write your solution here.
    render(<App />);
    expect(screen.getByText("Hello and good morning, Avantha!")).toBeInTheDocument();
    expect(screen.getByText("Hello and good afternoon, Samara!")).toBeInTheDocument();
    expect(screen.getByText("Hello and good evening, Houston!")).toBeInTheDocument();
  });

  test("displays three greetings", () => {
    // Write your solution here.
    render(<App />);
    expect(screen.getAllByText(/^Hello and/).length).toBe(3);
  });
});
