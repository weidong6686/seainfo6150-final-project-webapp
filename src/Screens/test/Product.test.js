import React from "react";
import Product from "../Product.jsx";
import { BrowserRouter } from 'react-router-dom';
import { render } from "@testing-library/react";
// import data from '../data';

describe("Product tests", () => {
  it("renders correctly", () => {
    const { container } = (<Product />);
    expect(container).toMatchSnapshot();
  });
});