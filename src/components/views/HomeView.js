import React from "react";
import { Link } from "react-router-dom";

const HomeView = () => {
  return (
    <div className="container text-center ">
      <h3 className="pt-4">Welcome to CampusViewer!</h3>
      <div className="row pt-2">
        <div className="col-12">
          <Link to="/campuses" className="btn btn-dark mb-2">
            View All Campuses
          </Link>
        </div>
        <div className="col-12">
          <Link to="/students" className="btn btn-dark">
            View All Students
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
