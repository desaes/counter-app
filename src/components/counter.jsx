// imrc <- Snippet to import React
import React, { Component } from "react";

// cc <- Snippet to create a class
// React.Fragment can be used instead of div to wrap JSX code
class Counter extends React.Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  // Use this to bind this to handleIncrement function or use arrow functions

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   handleIncrement() {
  //     console.log("Increment Clicked");
  //     this.state.count = this.state.count + 1;
  //   }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        {" "}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.renderTags()}
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state; // object destructuring (simple access to count)
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
