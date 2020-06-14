import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../app/App.css";

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return <div className="container">There are no campuses</div>;
  }

  return (
    <div className="container pt-4">
      <Link to="/campuses/new" className="btn btn-success mb-4">
        New Campus
      </Link>
      <div className="row">
        {props.allCampuses.map((campus) => (
          <div className="col-3 col-md-4 col-sm-2 mb-3">
            <div key={campus.id} className="card">
              <img
                src={campus.imageUrl}
                width="200px"
                alt={campus.name}
                className="card-img-top"
              />

              <div className="card-body">
                <h3 className="card-title">{campus.name}</h3>

                <p>{campus.students.length} students</p>
                <div className="form-inline">
                  <Link
                    to={`/campuses/${campus.id}`}
                    className="btn btn-info mr-3"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => props.handleDelete(campus.id)}
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

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
