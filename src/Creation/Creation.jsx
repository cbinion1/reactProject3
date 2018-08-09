import React, { Component } from "react";
import { Button } from 'reactstrap';
import "./style.css";

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
      <form className="creation-style" onSubmit={this.props.addComments.bind(this, this.state)}>
        <label>
          Game Title:
          <input type="text" name="title" onChange={this.updateComment} />
        </label>
        <label>
          Review:
          <input type="text" name="review" onChange={this.updateComment} />
        </label>
        <Button color="warning" type="Submit">Submit Yo Shit</Button>
      </form>
    );
  }
}

export default Creation;
