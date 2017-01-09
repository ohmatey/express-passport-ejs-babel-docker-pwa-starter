import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import Layout from './components/Layout';
import NoFoundPage from './components/NoFoundPage';
import Chat from './components/Chat';

const router = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Chat}/>
    <Route path="*" component={NoFoundPage}/>
  </Route>
);

export default router;