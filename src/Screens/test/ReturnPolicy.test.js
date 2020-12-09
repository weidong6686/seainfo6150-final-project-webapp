import React from "react";
import ReturnPolicy from "../ReturnPolicy.jsx";

describe("ReturnPolicy tests", () => {
  it("renders correctly", () => {
    const { container } = (<ReturnPolicy />);
    expect(container).toMatchSnapshot();
  });
});