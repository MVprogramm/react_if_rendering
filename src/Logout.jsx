import React from 'react';
import './logout.scss';
import './button.scss';

const Logout = ({onLogout}) => {
  return ( 
    <button 
      className='btn logout'
      onClick={onLogout}
    >
      Logout
    </button>
  )
};

export default Logout;