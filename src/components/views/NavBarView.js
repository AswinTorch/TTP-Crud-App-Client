import React from "react";
import { Link } from "react-router-dom";

const NavBarView = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        CampusViewer
      </Link>
      <form className="form-inline">
        <Link to="/campuses" className="pr-4 text-light">
          Campuses
        </Link>
        <Link to="/students" className="text-light">
          Students
        </Link>
      </form>
    </nav>
  );
};

export default NavBarView;
