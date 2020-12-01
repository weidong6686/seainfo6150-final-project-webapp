import React from "react";
import Product from "../Product.jsx";

describe("Product tests", () => {
  it("renders correctly", () => {
    const { container } = (<Product />);
    expect(container).toMatchSnapshot();
  });
});