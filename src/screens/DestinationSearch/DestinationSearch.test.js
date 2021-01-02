import React from "react";
import renderer from "react-test-renderer";

import DestinationSearch from "./DestinationSearch";

describe("<DestinationSearch />", () => {
  it("renders without crashing", () => {
    const rendered = renderer.create(<DestinationSearch />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it("test against snapshot", () => {
    const rendered = renderer.create(<DestinationSearch />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
