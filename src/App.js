import React, { Component } from "react";
import "./App.css";
import Submit from "./components/Submit";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class App extends Component {
  constructor(props) {
    super(props);
    //set the login to false so new users who are new to the site must log in to reach the next screen
    this.state = {
      username: "",
      password: "",
      loggedIn: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      // value: event.target.value,
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    // don't reload the page
    event.preventDefault();
    this.setState({
      username: "",
      password: "",
      loggedIn: !this.state.loggedIn,
    });
    console.log(this.state.loggedIn);
  }

  render() {
    if (this.state.loggedIn) {
      return <Submit />;
      //If a user is logged in they will advance to the "submit" section of code
    } else {
      return (
        <div className="loginApp">
          <div className="createCon">
            <div className="createAcc">
              <h1>Banking App</h1>
              <p>Lorem ipsum Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <Button
               variant="outlined"
               color="inherit">
                 Learn more
               </Button>
            </div>
          </div>

          <div className="login">
            {/* The next two forms are what control each the username and password text inputs or "names" */}
            <form className="userPass">
              <TextField
                className="textfield"
                name="username"
                type="text"
                placeholder="Username"
                variant="outlined"
                value={this.state.username}
                onChange={this.handleChange}
              />

              <TextField
                className="textfield"
                placeholder="Password"
                name="password"
                type="text"
                variant="outlined"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleSubmit}
              >
                Next
              </Button>
            </form>
            {/* When the button is pressed, the data will be sent to the handleSubmit function */}
            <a href="html_images.asp" target="_blank">
              Forgot Password >
            </a>
          </div>
        </div>
      );
    }
  }
}

export default App;
