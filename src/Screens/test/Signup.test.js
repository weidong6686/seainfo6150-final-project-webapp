import React from "react";
import Signup from "../Signup.jsx";

describe("Signup tests", () => {
  it("renders correctly", () => {
    const { container } = (<Signup />);
    expect(container).toMatchSnapshot();
  });
});