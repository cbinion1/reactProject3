import React from "react";

const Edit = props => {
  return (
    <div>
      <h4> Edit Beer Comment</h4>
      <form onSubmit={props.closeAndEdit}>
        <label>
          Edit Brewery:
          <input type="text" name="title" onChange={props.handleFormChange} value={props.commentToEdit.title} />
        </label>
        <label>
          Edit Review:
          <input type="text" name="review" onChange={props.handleFormChange} value={props.commentToEdit.review} />
        </label>
        <input type="Submit" />
      </form>
    </div>
  );

};

export default Edit;
