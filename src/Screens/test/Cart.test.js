import React from "react";
import Cart from "../Cart.jsx";

describe("Cart tests", () => {
  it("renders correctly", () => {
    const { container } = (<Cart />);
    expect(container).toMatchSnapshot();
  });
});