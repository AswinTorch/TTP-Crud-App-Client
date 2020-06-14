import React from "react";
import { Link } from "react-router-dom";

const StudentView = (props) => {
  return (
    <div>
      <div className="container pt-4 pb-4">
        <img src={props.student.imageUrl} alt={props.student.firstName} />
        <h1 className="pt-2">
          {props.student.firstName} {props.student.lastName}
        </h1>

        <div className="pt-4">
          <Link
            className="btn btn-warning mr-3"
            to={`/students/${props.student.id}/edit`}
          >
            Edit
          </Link>
          <button
            className="btn btn-danger"
            onClick={() => props.handleDelete(props.student.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentView;
