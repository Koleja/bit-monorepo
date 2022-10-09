import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { TestPageApp } from './app';

ReactDOM.render((
  <BrowserRouter>
    <TestPageApp />
  </BrowserRouter>
), document.getElementById('root'));

