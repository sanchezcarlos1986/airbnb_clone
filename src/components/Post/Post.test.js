import React from "react";
import renderer from "react-test-renderer";

import Post from "./Post";

describe("<Post />", () => {
  it("renders without crashing", () => {
    const rendered = renderer.create(<Post />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it("test against snapshot", () => {
    const rendered = renderer.create(<Post />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
