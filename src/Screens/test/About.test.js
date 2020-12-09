import React from "react";
import About from "../About.jsx";

describe("About tests", () => {
  it("renders correctly", () => {
    const { container } = (<About />);
    expect(container).toMatchSnapshot();
  });
});