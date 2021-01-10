import React from "react";
import renderer from "react-test-renderer";

import EditProfile from "./EditProfile";

describe("<EditProfile />", () => {
  it("renders without crashing", () => {
    const rendered = renderer.create(<EditProfile />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it("test against snapshot", () => {
    const rendered = renderer.create(<EditProfile />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
