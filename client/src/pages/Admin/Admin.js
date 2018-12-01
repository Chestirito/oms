import React, { Component } from "react";
// import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import SignupBtn from "../../components/SignupBtn";
import "./Admin.css";
import logo from "./img/barometer.png";

export default class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      firstName: "",
      lastName: "",
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleUserNameChange = event => {
    this.setState({
      userName: event.target.value
    });
   // console.log(this.state.userName);
  };

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  handleLogin = () => {
    const userInput = {
      userName: this.state.userName,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    };
    console.log(userInput);
    API.postingLoginData(userInput)
      .then(res => {
        // console.log(res);
        if (res.data !== null) {
          sessionStorage.name = res.data.firstName;
          this.props.history.push('/oms');;
        } else {
          console.log(`does not work`);
        }
        // console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="logindiv">
        <form className="card centered" onSubmit={this.handleSubmit}>
          <div className="card-body">
            <img className="logo" alt="icon" src={logo} />
            <h2> Login </h2>
            <div className="form-group">
              <input
                className="form-control"
                type="userName"
                placeholder = "Username"
                value={this.state.userName}
                onChange={this.handleUserNameChange}
                onfocus={this.placeholder = ""}
                onBlur={this.placeholder = "Username"}
              />
  
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                placeholder = "Password"
              onfocus={(e) => e.target.placeholder = ""}
              onBlur={(e) => e.target.placeholder = "Password"}
              />
             
            </div>
            <div className = "loginbutton">
            <SignupBtn onClick={this.handleLogin} type="submit" />
          </div>
          </div>
        </form>
      </div>
    );
  }
}
