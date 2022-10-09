import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ContactApp } from './app';

ReactDOM.render((
  <BrowserRouter>
    <ContactApp />
  </BrowserRouter>
), document.getElementById('root'));

