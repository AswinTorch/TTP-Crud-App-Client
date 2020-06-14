import React from "react";
import { Link } from "react-router-dom";
import {
  StudentNameListContainer,
  AddStudentToCampusContainer,
} from "../containers";

const CampusView = (props) => {
  return (
    <div className="container pt-4 pb-4">
      <img src={props.campus.imageUrl} alt={props.campus.name} />
      <h1 className="pt-2">{props.campus.name}</h1>
      <h5>Location: {props.campus.address}</h5>

      <p>{props.campus.description}</p>

      <div className="row">
        <StudentNameListContainer students={props.campus.students} />

        <AddStudentToCampusContainer
          campusId={props.campus.id}
          handleEnrollStudent={props.handleEnrollStudent}
        />
      </div>

      <div className="pt-4">
        <Link
          className="btn btn-warning mr-3"
          to={`/campuses/${props.campus.id}/edit`}
        >
          Edit
        </Link>
        <button
          className="btn btn-danger"
          onClick={() => props.handleDelete(props.campus.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CampusView;
