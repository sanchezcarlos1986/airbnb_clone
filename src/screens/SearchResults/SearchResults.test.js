import React from "react";
import renderer from "react-test-renderer";

import SearchResults from "./SearchResults";

describe("<SearchResults />", () => {
  it("renders without crashing", () => {
    const rendered = renderer.create(<SearchResults />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it("test against snapshot", () => {
    const rendered = renderer.create(<SearchResults />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
