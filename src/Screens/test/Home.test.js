import React from "react";
import Home from "../Home.jsx";
import { BrowserRouter } from 'react-router-dom';
import { render } from "@testing-library/react";

describe("Home tests", () => {
  it("renders correctly", () => {
    // const { container } = (<Home />);
    const { container } = render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );
    expect(container).toMatchSnapshot();
  });
});