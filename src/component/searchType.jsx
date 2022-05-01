/* eslint-disable react/prop-types */
import React from "react";
import "./searchType.css";

class SearchType extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {" "}
        <input
          className="inputborder"
          type="text"
          id={this.props.id}
          placeholder={this.props.placeholder}
          onChange={this.props.getUserType}
        />
      </div>
    );
  }
}

export default SearchType;
