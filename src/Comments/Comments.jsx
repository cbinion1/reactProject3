import React from "react";

const Comments = props => {
  const commentsList = props.comments.map((comment, i) => {
    return (
      <li key={comment._id}>
        <span>{comment.title}</span>
        <br />
        <small>{comment.description}</small>
        <br />
        <button onClick={props.deleteComments.bind(null, comment._id)}>
          Delete
        </button>
        <button onClick={props.showModal.bind(null, comment._id)}>Edit</button>
      </li>
    );
  });

  return <ul>{commentsList}</ul>;
};

export default Comments;
