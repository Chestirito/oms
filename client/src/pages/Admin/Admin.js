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
      checked: true,
      usersData: [],
    };
  }

  componentDidMount() {
    this.handleAllUsers()
    console.log(this.state.checked)
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
  
  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    });
  };

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };   

  handleCheck = event => {
      this.setState({
          checked: !this.state.checked
      })
      console.log(this.state.checked)
  }

  handleAllUsers = () => {
      API.getUsers()
      .then(res => {
          console.log(res.data)
          this.displayAllUsers(res.data)
      })
  }

  displayAllUsers = (users) => {
    const listUsers =
    users.map(element => {
        
    });
    this.setState({
        usersData: users
    });
    console.log(this.state.usersData)
  }

  handleLogin = () => {
    const userInput = {
      userName: this.state.userName,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      admin: this.state.checked
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
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h1>Users List</h1> 
                </div>
                <div className="col-6">

                    <form className="card" onSubmit={this.handleSubmit}>
                        <div className="card-body">
                        <img className="logo" alt="icon" src={logo} />
                        <h2> Signup Form </h2>
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
                            />

                            </div>

                            <div className="form-group">
                            <input
                            className="form-control"
                            type="password"
                            value={this.state.firstName}
                            onChange={this.handleFirstNameChange}
                            placeholder = "First Name"
                            />

                            </div>

                            <div className="form-group">
                            <input
                            className="form-control"
                            type="password"
                            value={this.state.lastName}
                            onChange={this.handleLastNameChange}
                            placeholder = "Last Name"
                            />

                            </div>

                            <div className="row m-1">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" onChange={this.handleCheck} id="defaultCheck1" />
                                    <label className="form-check-label mr-2">
                                    Admin?
                                    </label>
                                </div>
                            </div>

                            <div className = "loginbutton">
                            <SignupBtn onClick={this.handleLogin} type="submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
