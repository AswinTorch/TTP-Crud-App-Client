import React from "react";

const AddStudentFormView = (props) => {
  return (
    <div className="container">
      <form onSubmit={props.handleSubmit} className="pt-4">
        <div className="form-group">
          <label>First Name</label>
          <input
            className="form-control"
            value={props.firstName}
            name="firstName"
            onChange={props.handleChange}
            required
          ></input>
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            className="form-control"
            value={props.lastName}
            name="lastName"
            onChange={props.handleChange}
            required
          ></input>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            value={props.email}
            name="email"
            onChange={props.handleChange}
            required
            type="email"
          ></input>
        </div>

        <div className="form-group">
          <label>Image Url</label>
          <input
            className="form-control"
            value="https://via.placeholder.com/480x240?text=Student"
            name="imageUrl"
            onChange={props.handleChange}
            required
          ></input>
        </div>

        <div className="form-group">
          <label>GPA</label>
          <input
            className="form-control"
            value={props.gpa}
            name="gpa"
            onChange={props.handleChange}
            required
            type="number"
            step="0.01"
          ></input>
        </div>

        <button className="btn btn-primary">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudentFormView;
