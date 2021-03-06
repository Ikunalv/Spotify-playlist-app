import React, { Component } from "react";
import "./Searchbar.css";

class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.search = this.search.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }
  handleTermChange(event) {
    this.setState({
      term: event.target.value,
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  handleEnter(event) {
    if (event.keycode === 13) {
      this.search();
    }
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="row">
          <input
            placeholder="Artists, songs or podcasts"
            onChange={this.handleTermChange}
            onKeyUp={this.handleEnter}
          />
          <button className="SearchButton" onClick={this.search}>
            SEARCH
          </button>
        </div>
      </div>
    );
  }
}

export default Searchbar;
