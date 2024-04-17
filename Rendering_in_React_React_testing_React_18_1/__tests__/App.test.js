import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from "../src/App";
import Greeting from "../src/Greeting";

describe("Test App.js", () => {
  test("renders without crashing", () => {
    // Write your solution here.
    expect(1 + 1).toBe(2);
  });

  test("displays three greetings", () => {
    // Write your solution here.
    expect(1 + 1).toBe(2);
  });
});
