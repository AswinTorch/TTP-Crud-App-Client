import React, { Component } from "react";
import { AddStudentFormView } from "../views";
import { connect } from "react-redux";
import { addStudentThunk } from "../../thunks";

export class AddStudentFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      isValidName: false,
      errors: {},
    };
  }

  handleChange = (e) => {
    if (e.target.name === "firstName") {
      this.setState({ firstName: e.target.value }, this.validateName);
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  validateName = () => {
    const { firstName } = this.state;
    let errors = { ...this.state.errors };
    // set a valid boolean to true
    let isValidName = true;
    // check if the value is valid
    if (firstName.length < 2) {
      // if not, set the value to false and add error message
      isValidName = false;
      errors.name = "Invalid student name";
    }
    //
    // setstate with isValidName
    if (isValidName) {
      errors.name = "Valid student name";
    }
    this.setState({ isValidName, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.isValidName) this.props.addStudent(this.state);
  };

  render() {
    return (
      <>
        {this.state.isValidName ? (
          <div className="alert alert-success">{this.state.errors.name}</div>
        ) : (
          <div className="alert alert-warning">{this.state.errors.name}</div>
        )}
        <AddStudentFormView
          name={this.state.firstName}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    addStudent: (student) => dispatch(addStudentThunk(student, ownProps)),
  };
};

export default connect(null, mapDispatch)(AddStudentFormContainer);
