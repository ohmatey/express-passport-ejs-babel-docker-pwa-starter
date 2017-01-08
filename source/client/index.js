import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRouter';

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
};