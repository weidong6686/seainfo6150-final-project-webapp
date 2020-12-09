import React from "react";
import Contact from "../Contact.jsx";

describe("Contact tests", () => {
  it("renders correctly", () => {
    const { container } = (<Contact />);
    expect(container).toMatchSnapshot();
  });
});