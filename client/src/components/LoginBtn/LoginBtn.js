import React from "react";
// import "./loginBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const LoginBtn = props => (
  <button className="btn btn-dark" {...props}>
    {props.label}
  </button>
);

export default LoginBtn;
