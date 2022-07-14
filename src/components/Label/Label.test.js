import React from "react";
import renderer from "react-test-renderer";
import Label from "./Label";

describe("Label", () => {
  it("renders correctly", () => {
    const label = renderer.create(<Label label="Shopping cart" />);
    expect(label.root.props.label).toBe("Shopping cart");
  });
});
