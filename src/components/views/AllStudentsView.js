import React from "react";
import { Link } from "react-router-dom";

const AllStudentsView = ({ allStudents, handleDelete }) => {
  if (!allStudents.length) {
    return (
      <div className="container pt-2">
        <p className="alert alert-warning">There are no students.</p>
      </div>
    );
  }

  return (
    <div className="container pt-2">
      <h1 className="pt-2 pb-2">All Students</h1>
      <Link to="/students/new" className="btn btn-success mb-4">
        New Student
      </Link>
      <div className="row">
        {allStudents.map((student) => (
          <div className="col-3 col-md-4 col-sm-2 mb-3" key={student.id}>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{student.firstName}</h3>

                <div className="form-inline">
                  <Link
                    to={`/students/${student.id}`}
                    className="btn btn-info mr-3"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllStudentsView;
