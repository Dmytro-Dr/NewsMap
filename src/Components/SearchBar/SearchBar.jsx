import React, { Component } from "react";
import { CiSearch } from "react-icons/ci";
import "./SearchBar.scss";
export default class SearchBar extends Component {
  state = {
    queryString: "",
  };

  handleInputChange = (event) => {
    this.setState({ queryString: event.currentTarget.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.queryString.trim() === "") {
      return alert("Enter country's name");
    }
    this.props.onSubmit(this.state.queryString.toLowerCase());
  };

  render() {
    const { queryString } = this.state;
    return (
      <div className="SearchForm_wrapper">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <input
            name="SearchForm_input"
            className="SearchForm_input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter country's name"
            value={queryString}
            onChange={this.handleInputChange}
          />
          <button className="SearchForm_btn" type="submit">
            <CiSearch className="Search-icon" />
          </button>
        </form>
      </div>
    );
  }
}
