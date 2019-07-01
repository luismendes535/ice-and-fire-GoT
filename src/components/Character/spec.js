import React from "react";
import { shallow } from "enzyme";
import Character from "./Character";
import { findByTestAtrr, checkProps } from "../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Character {...props} />);
  return component;
};

describe("<Character />", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  describe("Checking PropTypes", () => {
    it("Should NOT throw a warning", () => {
      const expectedProps = {
        character: {
          name: "Example name",
          aliases: ["Example alias 1", "Example alias 2"],
          gender: "Male",
          died: "",
          fetchedBooks: []
        }
      };
      const propsError = checkProps(Character, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        character: {
          name: "Example name",
          aliases: ["Example alias 1", "Example alias 2"],
          gender: "Male",
          died: "",
          fetchedBooks: []
        }
      };
      wrapper = shallow(<Character {...props} />);
    });

    it("Should render a div", () => {
      const div = findByTestAtrr(wrapper, "characterComponent");
      expect(div.length).toBe(1);
    });
    it("Should render a name", () => {
      const name = findByTestAtrr(wrapper, "characterName");
      expect(name.length).toBe(1);
    });
    it("Should render aliases", () => {
      const aliases = findByTestAtrr(wrapper, "characterAliases");
      expect(aliases.length).toBe(1);
    });    
    it("Should render gender", () => {
      const gender = findByTestAtrr(wrapper, "characterGender");
      expect(gender.length).toBe(1);
    });
    it("Should render alive status", () => {
      const isAlive = findByTestAtrr(wrapper, "characterIsAlive");
      expect(isAlive.length).toBe(1);
    });
    it("Should render books", () => {
      const books = findByTestAtrr(wrapper, "characterBooks");
      expect(books.length).toBe(1);
    });
  });
  // beforeEach(() => {
  //   wrapper = shallow(<Character />);
  // });

  // it("should render properly", () => {
  //   expect(wrapper).toMatchSnapshot();
  // });

  // it("should render <Character/>", () => {
  //   expect(wrapper).toHaveLength(1);
  // });

  // it("should render <Character/>", () => {
  //   wrapper = shallow(<Character />)
  //   expect(wrapper).toHaveLength(1);
  // });
});
