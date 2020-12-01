import React from "react";
import Home from "../Home.jsx";

describe("Home tests", () => {
  it("renders correctly", () => {
    const { container } = (<Home />);
    expect(container).toMatchSnapshot();
  });
});