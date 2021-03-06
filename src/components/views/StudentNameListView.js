import React from "react";
import { Link } from "react-router-dom";

const StudentNameListView = (props) => {
  console.log(props);
  if (!props.students) {
    return <p>There are no students enrolled</p>;
  }
  return (
    <>
      <div className="col">
        <h5 className="">{props.students.length} Students</h5>
        {props.students.length === 0 ? (
          <div>
            <ul className="list-group">
              <li className="list-group-item">
                <p className="text-dark"></p>
              </li>
              <li className="list-group-item">
                <p className="text-dark"></p>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <ul className="list-group">
              {props.students.map((student) => (
                <li key={student.id} className="list-group-item">
                  <Link className="text-dark" to={`/students/${student.id}`}>
                    {student.firstName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default StudentNameListView;
