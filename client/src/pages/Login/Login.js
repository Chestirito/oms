import React, { Component } from "react";
// import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import LoginBtn from "../../components/LoginBtn";
import GuestBtn from "../../components/GuestBtn";
import "./Login.css";
import logo from "./img/barometer.png";
import Axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: ""
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

  handleGuestLogin = () => {
    const userInput = {
      userName: "guest",
      password: "guest"
    }
    console.log(userInput);
    API.postingLoginData(userInput)
      .then(res => {
        console.log(res.data)
        if(res.data){
          // sessionStorage.name = res.data.firstName;
          this.props.history.push('/oms');;         
        }else{
          console.log("error")
        }
      })
      .catch(err => console.log(err));
  }

  handleLogin = () => {
    const userInput = {
      userName: this.state.userName,
      password: this.state.password
    };
  

    console.log(userInput);
    API.postingLoginData(userInput)
      .then(res => {
        console.log(res.data)
        if(res.data){
          // sessionStorage.name = res.data.firstName;
          this.props.history.push('/oms');;         
        }else{
          console.log("error")
        }
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
                // onfocus={this.placeholder = ""}
                // onBlur={this.placeholder = "Username"}
              />
  
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                placeholder = "Password"
              // onfocus={(e) => e.target.placeholder = ""}
              // onBlur={(e) => e.target.placeholder = "Password"}
              />
             
            </div>
            <div className = "row">
                <div className = "col loginbutton">
                  <GuestBtn onClick={this.handleGuestLogin} type="submit"/> 
                </div>
                <div className = "col loginbutton">
                <LoginBtn onClick={this.handleLogin} type="submit" />
                </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}