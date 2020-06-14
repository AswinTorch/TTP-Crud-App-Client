import React from "react";

const AddStudentFormView = (props) => {
  return (
    <div className="container">
      <form onSubmit={props.handleSubmit} className="pt-4">
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            value={props.firstName}
            name="firstName"
            onChange={props.handleChange}
            required
          ></input>
        </div>

        <button className="btn btn-primary">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudentFormView;
