import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from "../src/App";
import Greeting from "../src/Greeting";

describe("Test Greeting.js", () => {
  test("renders name and greeting props correctly", () => {
    // Write your solution here.
    render(<Greeting name="Jane" greeting="it's a pleasure to meet you"/>);
    expect(screen.getByText("Hello and it's a pleasure to meet you, Jane!")).toBeInTheDocument();
    
  });
});
