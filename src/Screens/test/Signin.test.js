import React from "react";
import Signin from "../Signin.jsx";

describe("Signin tests", () => {
  it("renders correctly", () => {
    const { container } = (<Signin />);
    expect(container).toMatchSnapshot();
  });
});