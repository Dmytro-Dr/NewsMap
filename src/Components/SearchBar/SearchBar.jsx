import React, { Component } from "react";
import { CiSearch } from "react-icons/ci";
import "./SearchBar.scss";
export default class SearchBar extends Component {
  state = {
    queryString: "",
  };

  handleInputChange = (event) => {
    this.setState({ queryString: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.queryString.trim() === "") {
      return alert("Enter country's name")
    }
    this.props.onSubmit(this.state.queryString);
  };

  render() {
    const { queryString } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="SearchForm">
        <input
          name="searchForm_input"
          className="SearchForm_input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter country's name"
          value={queryString}
          onChange={this.handleInputChange}
        />
        <button className="SearchForm_input" type="submit">
          <CiSearch className="Search-icon" />
        </button>
      </form>
    );
  }
}
