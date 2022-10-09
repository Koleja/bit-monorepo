import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MyReactAppApp } from './app';

ReactDOM.render((
  <BrowserRouter>
    <MyReactAppApp />
  </BrowserRouter>
), document.getElementById('root'));

