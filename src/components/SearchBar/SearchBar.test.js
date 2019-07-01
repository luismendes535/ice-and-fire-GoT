import React from "react";
import { shallow } from "enzyme";
import SearchBar from "./SearchBar";

describe("<SearchBar />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchBar />);
  });
  it("should render properly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should render <SearchBar/>",()=>{
      expect(wrapper).toHaveLength(1)
  })
});
