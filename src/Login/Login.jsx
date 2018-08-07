import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const loginResponse = await fetch("http://localhost:9000/auth/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log(loginResponse, " this is login response");

    const parsedResponse = await loginResponse.json();
    console.log(parsedResponse);
    if (parsedResponse.data === "login Succesful") {
      this.props.history.push("/comments");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={this.handleChange} />
        </label>
        <input type="Submit" />
      </form>
    );
  }
}

export default Login;
