import React from "react";
import renderer from "react-test-renderer";

import Guests from "./Guests";

describe("<Guests />", () => {
  it("renders without crashing", () => {
    const rendered = renderer.create(<Guests />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it("test against snapshot", () => {
    const rendered = renderer.create(<Guests />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
