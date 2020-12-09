import React from "react";
import OrderConfirm from "../OrderConfirm.jsx";

describe("OrderConfirm tests", () => {
  it("renders correctly", () => {
    const { container } = (<OrderConfirm />);
    expect(container).toMatchSnapshot();
  });
});