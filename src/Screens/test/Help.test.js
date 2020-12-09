import React from "react";
import Help from "../Help.jsx";

describe("Help tests", () => {
  it("renders correctly", () => {
    const { container } = (<Help />);
    expect(container).toMatchSnapshot();
  });
});