import React from "react";
import renderer from "react-test-renderer";

import SearchResultsMap from "./SearchResultsMap";

describe("<SearchResultsMap />", () => {
  it("renders without crashing", () => {
    const rendered = renderer.create(<SearchResultsMap />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it("test against snapshot", () => {
    const rendered = renderer.create(<SearchResultsMap />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
