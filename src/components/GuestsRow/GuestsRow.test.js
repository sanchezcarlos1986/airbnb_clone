import React from "react";
import renderer from "react-test-renderer";

import GuestsRow from "./GuestsRowRow";

describe("<GuestsRow />", () => {
  it("renders without crashing", () => {
    const rendered = renderer.create(<GuestsRow />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it("test against snapshot", () => {
    const rendered = renderer.create(<GuestsRow />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
