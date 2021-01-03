import React from "react";
import renderer from "react-test-renderer";

import MapMarker from "./MapMarker";

describe("<MapMarker />", () => {
  it("renders without crashing", () => {
    const rendered = renderer.create(<MapMarker />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it("test against snapshot", () => {
    const rendered = renderer.create(<MapMarker />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
