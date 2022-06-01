import React from 'react';

import './auth.scss';

import Greeting from './Greeting.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    }
  }

  buttonHandler = (event) => {
    if (event.target.classList.contains('login')) {
      this.setState({
        isLoggedIn: true,
      });
    } else {
      this.setState({
        isLoggedIn: false,
      });
    }
  }

  render() {
    return (
      <div className='panel'>
        <Greeting 
          isLoggedIn={this.state.isLoggedIn} 
        />
        <div onClick={this.buttonHandler}>
          {
            this.state.isLoggedIn
              ? <Logout />
              : <Login />
          }
        </div>
      </div>
    )
  }
};

export default Auth;

