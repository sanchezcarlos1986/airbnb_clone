import React from "react";
import renderer from "react-test-renderer";

import Profile from "./Profile";

describe("<Profile />", () => {
  it("renders without crashing", () => {
    const rendered = renderer.create(<Profile />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it("test against snapshot", () => {
    const rendered = renderer.create(<Profile />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
