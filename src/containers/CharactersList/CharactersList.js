import React, { Component, Fragment } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Character from "../../components/Character/Character";
import Spinner from "../../components/UI/Spinner/Spinner";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

import "./CharacterList.css";

export class CharactersList extends Component {
  componentDidMount() {
    this.props.onFetchSuccess(this.props.currentPage, "", "");
  }
  
  onSearchClick = () => {
    this.props.onFetchSuccess(
      this.props.currentPage,
      this.props.filterAliveChars,
      this.props.searchedChar
    );
  };

  handlePageClick = async page => {
    await this.props.handlePageClick(page);
    this.props.onFetchSuccess(
      this.props.currentPage,
      this.props.filterAliveChars,
      ""
    );
  };

  renderChars() {
    const { characters, searchedChar } = this.props;
    const textItemRender = (current, type, element) => {
      if (type === "prev") {
        return "Prev";
      }
      if (type === "next") {
        return "Next";
      }
      return element;
    };
    return (
      <Fragment>
        <SearchBar
          updateSearchInput={this.props.updateSearchInput}
          toggleAliveChars={this.props.toggleAliveChars}
          onSearchClick={this.onSearchClick}
          searchedChar={searchedChar}
          isAlive={this.props.filterAliveChars}
        />
        {characters.length > 0 ? (
          <div className="List">
            {characters.map((character, id) => {
              return (
                <Character
                  key={id}
                  character={character}
                  searchedChar={this.props.searchedChar}
                />
              );
            })}
            {characters.length > 4 ? (
              <Pagination
                itemRender={textItemRender}
                onChange={this.handlePageClick}
                current={this.props.currentPage}
                total={200}
              />
            ) : null}
          </div>
        ) : (
          <p>No characters found.</p>
        )}
      </Fragment>
    );
  }

  render() {
    const { loading } = this.props;
    let content = <Spinner />;
    if (!loading) content = this.renderChars();
    return (
      <div className="Container">
        <h2>List of Characters</h2>
        {content}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.chars.chars,
    loading: state.chars.loading,
    currentPage: state.chars.currentPage,
    filterAliveChars: state.chars.filterAliveChars,
    searchedChar: state.chars.searchedChar
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchSuccess: (currentPage, isAlive, name) =>
      dispatch(actions.fetchChars(currentPage, isAlive, name)),
    updateSearchInput: e => dispatch(actions.updateSearchInput(e.target.value)),
    toggleAliveChars: () => dispatch(actions.toggleAliveChars()),
    handlePageClick: currentPage =>
      dispatch(actions.handlePageClick(currentPage))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(CharactersList, axios));
