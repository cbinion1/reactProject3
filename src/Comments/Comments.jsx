import React from "react";
import { Button } from 'reactstrap';

const Comments = (props) => {
  console.log("THIS IS PROPS IN COMMENTS", props)
  const commentsList = props.comments.map((comment, i) => {
    console.log(comment, " THIS IS FUCKING POTATO")
    return (
      <li key={comment._id} >
        <span>{comment.title}</span>
        <br />
        <small>{comment.review}</small>
        <br />
        <Button color="secondary" onClick={props.deleteComments.bind(null, comment._id)}>Delete</Button>
        <Button color="success" onClick={props.showModal.bind(null, comment._id)}>Edit</Button>
      </li>
    );
  });

  return <ul>{commentsList}</ul>;
};

export default Comments;
