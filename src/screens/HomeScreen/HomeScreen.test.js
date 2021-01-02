import React from "react";
import renderer from "react-test-renderer";

import HomeScreen from "./HomeScreen";

describe("<HomeScreen />", () => {
  it("renders without crashing", () => {
    const rendered = renderer.create(<HomeScreen />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it("test against snapshot", () => {
    const rendered = renderer.create(<HomeScreen />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
