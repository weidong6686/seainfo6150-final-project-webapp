import React from "react";
import Error from "../Error.jsx";

describe("Error tests", () => {
  it("renders correctly", () => {
    const { container } = (<Error />);
    expect(container).toMatchSnapshot();
  });
});