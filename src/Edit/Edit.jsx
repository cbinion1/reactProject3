import React, { Component } from "react";

const Edit = props => {
  return (
    <div>
      <h4> Edit Beer Comment</h4>
      <form onSubmit={props.closeAndEdit}>
        <label>
          Edit Comment:
          <input
            type="text"
            name="title"
            onChange={props.handleFormChange}
            value={props.commentToEdit.title}
          />
        </label>
        <label>
          Edit Description:
          <input
            type="text"
            name="description"
            onChange={props.handleFormChange}
            value={props.commentToEdit.description}
          />
        </label>
        <input type="Submit" />
      </form>
    </div>
  );
};

export default Edit;
