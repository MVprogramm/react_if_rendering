import React from 'react';

import './auth.scss';

import Greeting from './Greeting.jsx';

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    }
  }

  handleLogIn = () => {
    this.setState({
      isLoggedIn: true,
    });
  }

  handleLogOut = () => {
    this.setState({
      isLoggedIn: false,
    });
  }

  render() {
    return (
      <div className='panel'>
        <Greeting 
          isLoggedIn={this.state.isLoggedIn} 
        />
        <div>
          <button className='btn' onClick={this.handleLogIn}>Login</button>
          <button className='btn' onClick={this.handleLogOut}>Logout</button>
        </div>
      </div>
    )
  }
};

export default Auth;

