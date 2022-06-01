import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import Auth from './Auth.jsx';

const rootElem = document.querySelector('#root');

ReactDOM.render(
  <Auth />,
  rootElem
);