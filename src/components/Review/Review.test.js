import React from "react";
import renderer from "react-test-renderer";

import Review from "./Review";

describe("<Review />", () => {
  it("renders without crashing", () => {
    const rendered = renderer.create(<Review />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it("test against snapshot", () => {
    const rendered = renderer.create(<Review />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
