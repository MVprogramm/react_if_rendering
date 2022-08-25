import React from "react";
import "./auth.scss";
import Greeting from "./features/greeting/Greeting.jsx";
import Login from "./features/login/Login.jsx";
import Logout from "./features/logout/Logout.jsx";

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  loginHandler = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  logoutHandler = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div>
          {this.state.isLoggedIn ? (
            <Logout onLogout={this.logoutHandler} />
          ) : (
            <Login onLogin={this.loginHandler} />
          )}
        </div>
      </div>
    );
  }
}

export default Auth;
