import React from "react";
import renderer from "react-test-renderer";

import DetailedPost from "./DetailedPost";

describe("<DetailedPost />", () => {
  it("renders without crashing", () => {
    const rendered = renderer.create(<DetailedPost />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it("test against snapshot", () => {
    const rendered = renderer.create(<DetailedPost />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
