import React from "react";
import renderer from "react-test-renderer";

import PostCarouselItem from "./PostCarouselItem";

describe("<PostCarouselItem />", () => {
  it("renders without crashing", () => {
    const rendered = renderer.create(<PostCarouselItem />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it("test against snapshot", () => {
    const rendered = renderer.create(<PostCarouselItem />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
