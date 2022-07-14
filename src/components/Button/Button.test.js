import React from "react";
import { create, act } from "react-test-renderer";
import Button from "./Button";

describe("Button", () => {
  it("renders correctly", () => {
    const mockFn = jest.fn();
    const button = create(
      <Button variant="outlined" onClick={() => mockFn()}>
        VIEW MORE
      </Button>
    );
    act(() => {
        button.root.props.onClick();
    });
    expect(mockFn).toHaveBeenCalled();
    expect(button.root.props.children).toBe("VIEW MORE");
  });
});
