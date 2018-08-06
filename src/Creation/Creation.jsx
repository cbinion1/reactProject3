import React, { Component } from "react";

class Creation extends Component {
  constructor() {
    super();

    this.state = {};
  }
  createComment = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  render() {
    console.log(this.props, " this is props");
    return (
      <form onSubmit={this.props.addComment.bind(this, this.state)}>
        <label>
          Comment:
          <input type="text" name="title" onChange={this.updateComment} />
        </label>
        <label>
          Description:
          <input type="text" name="description" onChange={this.updateComment} />
        </label>
        <input type="Submit" />
      </form>
    );
  }
}

export default Creation;
