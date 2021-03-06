import React, { Component } from "react";
// import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import LoginBtn from "../../components/LoginBtn";
import "./Login.css";
import logo from "./img/barlogo-01.png";
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

  handleLogin = () => {
    window.sessionStorage.setItem("username", this.state.userName);
    const userInput = {
      userName: this.state.userName,
      password: this.state.password
    };
    // console.log(userInput);
    API.postingLoginData(userInput)
      .then(res => {
        // if (res.data.admin) {
        //   this.props.history.push('/oms');
        //   window.sessionStorage.setItem("admin", true);
        // } 
        if (res.data !== null){
          window.sessionStorage.setItem("firstName", res.data.firstName);
          window.sessionStorage.setItem("admin", res.data.admin);
          this.props.history.push('/oms');
        } else {
          console.log(`does not work`);
        }
        // console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  handleGuest = () =>{
    window.sessionStorage.setItem("firstName", "Guest");
    this.props.history.push('/oms');;
  }

  render() {
    return (
      <div className="logindiv">
          <div className ="loginlogodiv">
            <img className="logo" alt="icon" src={logo} /></div>
        <form className="card centered" onSubmit={this.handleSubmit}>
          
          <div className="card-body">
      
           
            <div className="form-group">
              <input
                className="form-control"
                type="userName"
                placeholder = "Username"
                value={this.state.userName}
                onChange={this.handleUserNameChange}
              />
  
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                placeholder = "Password"
              />
             
            </div>
            <div className = "loginbutton">
              <LoginBtn 
                onClick={this.handleLogin} 
                type="submit" 
                label="Login"
              />
              <div className="divider"></div>
              <LoginBtn 
                onClick={this.handleGuest} 
                type="submit" 
                label="Guest"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
