import React from "react";
import renderer from "react-test-renderer";

import PostScreen from "./PostScreen";

describe("<PostScreen />", () => {
  it("renders without crashing", () => {
    const rendered = renderer.create(<PostScreen />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it("test against snapshot", () => {
    const rendered = renderer.create(<PostScreen />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
