import React, { Component } from "react";

class Creation extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      review: ""
    };
  }
  updateComment = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  render() {
    console.log(this.props, " this is props");
    return (
      <form onSubmit={this.props.addComments.bind(this, this.state)}>
        <label>
          Brewery:
          <input type="text" name="title" onChange={this.updateComment} />
        </label>
        <label>
          Review:
          <input type="text" name="review" onChange={this.updateComment} />
        </label>
        <input type="Submit" />
      </form>
    );
  }
}

export default Creation;
