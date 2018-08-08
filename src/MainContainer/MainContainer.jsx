import React, { Component } from "react";
import Creation from "../Creation/Creation.jsx";
import Comments from "../Comments/Comments.jsx";
import Edit from "../Edit/Edit.jsx";
import NavBar from "../NavBar/NavBar.jsx";

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      showEdit: false,
      editCommentId: null,
      commentToEdit: {
        title: "",
        comment: ""
      }
    };
  }

  componentDidMount() {
    this.getComments()
      .then(comments => {
        this.setState({
          comments: comments.data
        });
        console.log(comments, "this is comments")
      })
      .catch(err => {
        console.log(err);
      });

  }

  getComments = async () => {
    const comments = await fetch("http://localhost:9000/comments");
    const parsedComments = await comments.json();
    return parsedComments;
  };

  addComments = async (comment, e) => {
    e.preventDefault();

    try {
      const createComment = await fetch("http://localhost:9000/comments", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(comment),
        headers: {
          "Content-type": "application/json"
        }
      });
      const parsedResponse = await createComment.json();
      console.log(parsedResponse, " this is the parsed response in add comment")
      this.setState({
        comments: [...this.state.comments, parsedResponse.data]
      });
    } catch (err) {
      console.log(err);
    }
    console.log(comment, " this is the added comment")

  };

  showModal = id => {
    const commentToEdit = this.state.comments.find(
      comment => comment._id === id
    );
    this.setState({
      showEdit: true,
      editCommentId: id,
      commentToEdit: commentToEdit
    });
  };

  deleteComments = async (id, e) => {
    e.preventDefault();

    try {
      const deleteComments = await fetch(
        "http://localhost:9000/comments/" + id,
        {
          method: "DELETE",
          credentials: "include"
        }
      );

      const parsedResponse = await deleteComments.json();
      if (parsedResponse.status === 200) {
        this.setState({
          comments: this.state.comments.filter(
            (comment, i) => comment._id !== id
          )
        });
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };
  closeAndEdit = async e => {
    e.preventDefault();
    try {
      const editComment = await fetch(
        "http://localhost:9000/comments/" + this.state.editCommentId,
        {
          method: "PUT",
          credentials: "include",
          body: JSON.stringify(this.state.commentToEdit),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      const parsedResponse = await editComment.json();
      const editedCommentArray = this.state.comments.map(comment => {
        if (comment._id === this.state.editCommentId) {
          comment.title = parsedResponse.data.title;
          comment.description = parsedResponse.data.description;
        }

        return comment;
      });

      this.setState({
        comments: editedCommentArray,
        showEdit: false
      });
    } catch (err) {
      console.log(err);
    }
  };
  handleFormChange = e => {
    this.setState({
      commentToEdit: {
        ...this.state.commentToEdit, [e.target.name]: e.target.value
      }
    });
  };
  render() {
    return (
      <div>
        <NavBar />
        <Creation addComments={this.addComments} handleFormChange={this.handleFormChange} />
        <Comments deleteComments={this.deleteComments} showModal={this.showModal} comments={this.state.comments} />
        {this.state.showEdit ? (<Edit closeAndEdit={this.closeAndEdit} handleFormChange={this.handleFormChange} commentToEdit={this.state.commentToEdit} />) : null}
      </div>
    );
  }
}

export default MainContainer;
