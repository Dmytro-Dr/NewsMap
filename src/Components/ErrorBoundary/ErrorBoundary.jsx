import React, { Component } from "react";

export default class ErrorBoundry extends Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>
            Something went wrong, please try again. P.S don't search for "UK"
          </h1>
          {this.props.children}
        </>
      );
    }
    return this.props.children;
  }
}
