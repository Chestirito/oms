import React from "react";
import "./adminButton.css";
import { Link } from "react-router-dom";

function AdminButton(props) {
  return (
    <Link to="/admin">
      <button className="themeButton">
         <i className="ms-Icon ms-Icon--AccountManagement" />
      </button>
      </Link>
  );
}

export default AdminButton;
