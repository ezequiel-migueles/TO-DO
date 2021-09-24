import React from "react";
import { shallow } from "enzyme";
import Todo from "./Todo";

describe("Todo", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Todo />);
    expect(wrapper).toMatchSnapshot();
  });
});
